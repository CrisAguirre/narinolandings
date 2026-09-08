import fs from 'fs';

const filePath = './src/data/municipiosData.js';
let content = fs.readFileSync(filePath, 'utf-8');

const nameRegex = /name:\s*"([^"]+)"/g;
let match;
const municipalities = [];

while ((match = nameRegex.exec(content)) !== null) {
    municipalities.push(match[1]);
}

console.log(`Found ${municipalities.length} municipalities.`);

async function getImageUrl(muniName) {
    const queries = [
        `Parque principal ${muniName} Nariño`,
        `Plaza ${muniName} Nariño`,
        `Parque ${muniName} Nariño`,
        `${muniName} Nariño`
    ];

    const headers = { 'User-Agent': 'BotNarino/1.0 (https://example.com)' };

    for (const query of queries) {
        const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json`;
        try {
            const res = await fetch(searchUrl, { headers });
            const data = await res.json();
            if (data.query && data.query.search && data.query.search.length > 0) {
                const title = data.query.search[0].title;
                const imageInfoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
                const imgRes = await fetch(imageInfoUrl, { headers });
                const imgData = await imgRes.json();
                const pages = imgData.query.pages;
                const pageId = Object.keys(pages)[0];
                if (pages[pageId].imageinfo && pages[pageId].imageinfo.length > 0) {
                    return pages[pageId].imageinfo[0].url;
                }
            }
        } catch (e) {
            console.error(`Error searching for ${muniName}:`, e);
        }
    }
    return null;
}

async function processAll() {
    for (const muni of municipalities) {
        console.log(`Searching image for ${muni}...`);
        const url = await getImageUrl(muni);
        if (url) {
            console.log(`Found: ${url}`);
            // The regex matches the name, subregion, color and image lines to safely replace the image url.
            // Using a generic approach: look for the name, then find the next image: "..." line.
            const index = content.indexOf(`name: "${muni}"`);
            if (index !== -1) {
                const imageMatch = content.substring(index).match(/image:\s*"([^"]*)"/);
                if (imageMatch) {
                    const exactMatch = imageMatch[0];
                    const replacedMatch = `image: "${url}"`;
                    // Replace only the first occurrence after the name
                    content = content.substring(0, index) + content.substring(index).replace(exactMatch, replacedMatch);
                }
            }
        } else {
            console.log(`No image found for ${muni}`);
        }
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Done updating images.');
}

processAll();

import fs from 'fs';

const filePath = 'src/data/municipiosData.js';
let content = fs.readFileSync(filePath, 'utf-8');

// The Unsplash placeholder of a colonial park/square
const placeholder = "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop";

// Replace any image that has Flag_, Bandera_, or .pdf
const regex = /image:\s*"([^"]*(Flag_|Bandera_|\.pdf)[^"]*)"/g;

content = content.replace(regex, `image: "${placeholder}"`);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replaced missing/invalid photos with high-quality placeholders.');

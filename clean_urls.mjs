import fs from 'fs';

const filePath = 'src/data/municipiosData.js';
let content = fs.readFileSync(filePath, 'utf-8');

// The Unsplash placeholder
const placeholder = "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop";

// 1. Remove query parameters from Wikimedia images
content = content.replace(/(image:\s*"https:\/\/upload\.wikimedia\.org\/[^"]+)\?utm_source=[^"]+(")/g, '$1$2');

// 2. Replace any remaining .svg images with the placeholder
content = content.replace(/image:\s*"[^"]+\.svg[^"]*"/g, `image: "${placeholder}"`);

// 3. Just in case, replace any http:// links with https:// to prevent mixed content
content = content.replace(/image:\s*"http:\/\//g, 'image: "https://');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Cleaned up image URLs and replaced remaining SVGs.');

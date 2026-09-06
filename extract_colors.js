const fs = require('fs');

const svgContent = fs.readFileSync('public/assets/1.svg', 'utf-8');

const colors = new Set();
const fillRegex = /fill:\s*(#[0-9a-fA-F]{6})/ig;
let match;
while ((match = fillRegex.exec(svgContent)) !== null) {
  colors.add(match[1].toLowerCase());
}

console.log("Colors found in SVG:");
console.log(Array.from(colors).join('\n'));

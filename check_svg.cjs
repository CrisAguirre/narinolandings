const fs = require('fs');

const svgContent = fs.readFileSync('public/assets/1.svg', 'utf-8');

// The text tags we saw earlier
// <text ...> <tspan ...>Rio Mayo</tspan> </text>
// We want to find the path that has similar coordinates.
// Actually, let's just dump ALL fill colors and their occurrences.
const fillRegex = /style="[^"]*fill:\s*(#[0-9a-fA-F]{6})/ig;
const occurrences = {};
let match;
while ((match = fillRegex.exec(svgContent)) !== null) {
  const color = match[1].toLowerCase();
  occurrences[color] = (occurrences[color] || 0) + 1;
}

console.log("Colors in 1.svg and their occurrence count:");
console.log(occurrences);

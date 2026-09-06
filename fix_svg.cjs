const fs = require('fs');
const getBounds = require('svg-path-bounds');

const svgContent = fs.readFileSync('public/assets/1.svg', 'utf-8');

const abadesX = 769.54596;
const abadesY = 822.28729;

const pathRegex = /<path([^>]+d="([^"]+)"[^>]*)>/gi;
const paths = [];
let match;
while ((match = pathRegex.exec(svgContent)) !== null) {
  const fullPath = match[0];
  const inner = match[1];
  const d = match[2];
  
  if (fullPath.includes('#ffdea9')) {
    try {
      const [left, top, right, bottom] = getBounds(d);
      const cx = (left + right) / 2;
      const cy = (top + bottom) / 2;
      
      const dist = Math.sqrt(Math.pow(abadesX - cx, 2) + Math.pow(abadesY - cy, 2));
      
      paths.push({
        fullPath,
        inner,
        dist
      });
    } catch(e) {}
  }
}

console.log(`Found ${paths.length} paths with #ffdea9`);

// Sort by distance to Abades
paths.sort((a, b) => a.dist - b.dist);

// Abades has 3 municipalities, but there might be 4 paths. Let's color the 4 closest paths.
// Rio Mayo has 7 municipalities (the remaining 6 paths)
const closestPaths = paths.slice(0, 4);
let newSvg = svgContent;

closestPaths.forEach(p => {
  console.log(`Replacing path at dist ${p.dist}`);
  // Replace #ffdea9 with #ffd000
  const newPath = p.fullPath.replace(/#ffdea9/gi, '#ffd000');
  newSvg = newSvg.replace(p.fullPath, newPath);
});

fs.writeFileSync('public/assets/1.svg', newSvg);
console.log("SVG updated!");

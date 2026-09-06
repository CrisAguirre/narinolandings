const fs = require('fs');
const getBounds = require('svg-path-bounds');

const svgContent = fs.readFileSync('public/assets/1.svg', 'utf-8');

// Extract text labels with their SVG coordinates
// The text elements have the actual coordinates we need
const textRegex = /<text[^>]*>\s*<tspan[^>]*x="([0-9.-]+)"[^>]*y="([0-9.-]+)"[^>]*>([^<]+)<\/tspan>/gs;
const labels = [];
let textMatch;
while ((textMatch = textRegex.exec(svgContent)) !== null) {
  labels.push({
    x: parseFloat(textMatch[1]),
    y: parseFloat(textMatch[2]),
    text: textMatch[3]
  });
}

// The SVG has a transform on the group containing paths: translate(254.46188,-5470.7583)
// And an inner layer transform: translate(-40.288116,-5884.7332) for the background
// Let's find what transform the Entidades layer has
const entidadesMatch = svgContent.match(/id="g1206"[^>]*>/);
const namesMatch = svgContent.match(/inkscape:label="Nombres"[^>]*>/);

console.log("Labels found:");
labels.forEach(l => console.log(`  ${l.text}: (${l.x}, ${l.y})`));

// The paths in the Entidades group have transform="translate(254.46188,-5470.7583)"
// The text labels in the Nombres group DON'T have an extra transform (they're in the same parent)
// So label coordinates and path coordinates are in the SAME coordinate space.

// Let's find each path, compute bounds, and find which label is INSIDE those bounds
const pathRegex = /<path[^>]*style="[^"]*fill:(#[0-9a-fA-F]{6})[^"]*"[^>]*d="([^"]+)"[^>]*>/gs;
const colorPaths = {};
let pathMatch;
while ((pathMatch = pathRegex.exec(svgContent)) !== null) {
  const color = pathMatch[1].toLowerCase();
  const d = pathMatch[2];
  
  if (['#e1e1e1','#f2f2f2','#ffffff','#fefee9','#e0e0e0','#000000','#c22938','#00dcff'].includes(color)) continue;
  
  try {
    const [left, top, right, bottom] = getBounds(d);
    if (!colorPaths[color]) colorPaths[color] = [];
    colorPaths[color].push({ left, top, right, bottom });
  } catch(e) {}
}

// Also try reversed order (d before style)
const pathRegex2 = /<path[^>]*d="([^"]+)"[^>]*style="[^"]*fill:(#[0-9a-fA-F]{6})[^"]*"[^>]*>/gs;
while ((pathMatch = pathRegex2.exec(svgContent)) !== null) {
  const d = pathMatch[1];
  const color = pathMatch[2].toLowerCase();
  
  if (['#e1e1e1','#f2f2f2','#ffffff','#fefee9','#e0e0e0','#000000','#c22938','#00dcff'].includes(color)) continue;
  
  try {
    const [left, top, right, bottom] = getBounds(d);
    if (!colorPaths[color]) colorPaths[color] = [];
    colorPaths[color].push({ left, top, right, bottom });
  } catch(e) {}
}

console.log("\nColors and their path count:");
for (const [color, paths] of Object.entries(colorPaths)) {
  console.log(`  ${color}: ${paths.length} paths`);
}

// For each label, find which color paths CONTAIN the label point
console.log("\n=== Point-in-bounds matching ===");
labels.forEach(label => {
  const containing = [];
  
  for (const [color, paths] of Object.entries(colorPaths)) {
    for (const bounds of paths) {
      if (label.x >= bounds.left && label.x <= bounds.right && 
          label.y >= bounds.top && label.y <= bounds.bottom) {
        containing.push({ color, bounds });
      }
    }
  }
  
  // Find the smallest containing bounds (most specific)
  containing.sort((a, b) => {
    const areaA = (a.bounds.right - a.bounds.left) * (a.bounds.bottom - a.bounds.top);
    const areaB = (b.bounds.right - b.bounds.left) * (b.bounds.bottom - b.bounds.top);
    return areaA - areaB;
  });
  
  const bestMatch = containing[0];
  console.log(`${label.text}: ${bestMatch ? bestMatch.color : 'NO MATCH'} (${containing.length} candidates: ${containing.map(c => c.color).join(', ')})`);
});

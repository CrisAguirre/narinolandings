const fs = require('fs');
const getBounds = require('svg-path-bounds');

const svgContent = fs.readFileSync('public/assets/1.svg', 'utf-8');

// Entidades group transform
const TX = 254.46188;
const TY = -5470.7583;

// Label coordinates (in root SVG space)
const ABADES = { x: 769.55, y: 822.29 };
const RIO_MAYO = { x: 1186.50, y: 722.22 };
const GUAMBUYACO = { x: 795.39, y: 712.11 };

// Extract all paths and their colors using both regex orders
const pathRegex1 = /<path[^>]*style="[^"]*fill:\s*(#[0-9a-fA-F]{6})[^"]*"[^>]*d="([^"]+)"[^>]*>/gs;
const pathRegex2 = /<path[^>]*d="([^"]+)"[^>]*style="[^"]*fill:\s*(#[0-9a-fA-F]{6})[^"]*"[^>]*>/gs;

function extractPaths(regex, svgContent, colorIdx, dIdx) {
  const results = [];
  let match;
  while ((match = regex.exec(svgContent)) !== null) {
    const color = match[colorIdx].toLowerCase();
    const d = match[dIdx];
    const skip = ['#e1e1e1','#f2f2f2','#ffffff','#fefee9','#e0e0e0','#000000','#c22938','#00dcff'];
    if (skip.includes(color)) continue;
    
    try {
      const [left, top, right, bottom] = getBounds(d);
      results.push({
        color,
        cx: (left + right) / 2 + TX,
        cy: (top + bottom) / 2 + TY,
        area: (right - left) * (bottom - top),
        left: left + TX, top: top + TY, right: right + TX, bottom: bottom + TY
      });
    } catch(e) {}
  }
  return results;
}

const paths1 = extractPaths(pathRegex1, svgContent, 1, 2);
const paths2 = extractPaths(pathRegex2, svgContent, 2, 1);
const allPaths = [...paths1, ...paths2];

// Show #ffdea9 and #fffc9a paths with their distances to Abades and Rio Mayo
console.log("=== #ffdea9 paths (currently Río Mayo) ===");
const ffdea9 = allPaths.filter(p => p.color === '#ffdea9');
ffdea9.forEach((p, i) => {
  const dAbades = Math.round(Math.hypot(p.cx - ABADES.x, p.cy - ABADES.y));
  const dRioMayo = Math.round(Math.hypot(p.cx - RIO_MAYO.x, p.cy - RIO_MAYO.y));
  const closest = dAbades < dRioMayo ? 'ABADES' : 'RIO_MAYO';
  console.log(`  Path ${i}: center=(${Math.round(p.cx)}, ${Math.round(p.cy)}) dist_Abades=${dAbades} dist_RioMayo=${dRioMayo} => ${closest}`);
});

console.log("\n=== #fffc9a paths (currently Abades) ===");
const fffc9a = allPaths.filter(p => p.color === '#fffc9a');
fffc9a.forEach((p, i) => {
  const dAbades = Math.round(Math.hypot(p.cx - ABADES.x, p.cy - ABADES.y));
  const dGuam = Math.round(Math.hypot(p.cx - GUAMBUYACO.x, p.cy - GUAMBUYACO.y));
  console.log(`  Path ${i}: center=(${Math.round(p.cx)}, ${Math.round(p.cy)}) dist_Abades=${dAbades} dist_Guambuyaco=${dGuam}`);
});

console.log("\n=== #ffadad paths (currently Occidente) ===");
const ffadad = allPaths.filter(p => p.color === '#ffadad');
ffadad.forEach((p, i) => {
  const dAbades = Math.round(Math.hypot(p.cx - ABADES.x, p.cy - ABADES.y));
  console.log(`  Path ${i}: center=(${Math.round(p.cx)}, ${Math.round(p.cy)}) dist_Abades=${dAbades}`);
});

console.log("\n=== All colors near Abades (within 200px) ===");
allPaths
  .map(p => ({ ...p, dist: Math.hypot(p.cx - ABADES.x, p.cy - ABADES.y) }))
  .filter(p => p.dist < 200)
  .sort((a, b) => a.dist - b.dist)
  .forEach(p => {
    console.log(`  ${p.color} at (${Math.round(p.cx)}, ${Math.round(p.cy)}) dist=${Math.round(p.dist)} area=${Math.round(p.area)}`);
  });

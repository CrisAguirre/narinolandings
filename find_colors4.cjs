const fs = require('fs');
const getBounds = require('svg-path-bounds');

const svgContent = fs.readFileSync('public/assets/1.svg', 'utf-8');

// Entidades group transform: translate(254.46188, -5470.7583)
const TX = 254.46188;
const TY = -5470.7583;

// Text labels (in root SVG coordinate space, no extra transform)
const labels = [
  { text: "Telembí",           x: 504.27258, y: 613.95306 },
  { text: "Abades",            x: 769.54596, y: 822.28729 },
  { text: "Juanambú",          x: 1059.429,  y: 793.93134 },
  { text: "Centro",            x: 1043.1287, y: 938.7345  },
  { text: "Obando",            x: 921.57098, y: 1164.3824 },
  { text: "Piedemonte Costero", x: 484.44983, y: 968.37915 },
  { text: "Sabana",            x: 828.46106, y: 989.97571 },
  { text: "Guambuyaco",        x: 795.39099, y: 712.11078 },
  { text: "Occidente",         x: 866.88318, y: 870.57343 },
  { text: "Cordillera",        x: 878.8725,  y: 579.96948 },
  { text: "Río Mayo",          x: 1186.4993, y: 722.22455 },
  { text: "Sanquianga",        x: 461.94528, y: 284.0614  },
  { text: "Pacífico Sur",      x: 145.94043, y: 671.95532 },
];

// Extract paths from the Entidades group (between g1206 and next closing </g>)
// Path coordinates are local to the group, so we need to add TX, TY to get root coords
const pathRegex = /<path[^>]*style="[^"]*fill:\s*(#[0-9a-fA-F]{6})[^"]*"[^>]*d="([^"]+)"[^>]*>/gs;
const pathRegex2 = /<path[^>]*d="([^"]+)"[^>]*style="[^"]*fill:\s*(#[0-9a-fA-F]{6})[^"]*"[^>]*>/gs;

const allPaths = [];
let match;

while ((match = pathRegex.exec(svgContent)) !== null) {
  const color = match[1].toLowerCase();
  const d = match[2];
  if (['#e1e1e1','#f2f2f2','#ffffff','#fefee9','#e0e0e0','#000000','#c22938','#00dcff'].includes(color)) continue;
  
  try {
    const [left, top, right, bottom] = getBounds(d);
    // Apply the group transform to get to root coordinate space
    allPaths.push({
      color,
      left: left + TX,
      top: top + TY,
      right: right + TX,
      bottom: bottom + TY,
      cx: (left + right) / 2 + TX,
      cy: (top + bottom) / 2 + TY,
      area: (right - left) * (bottom - top)
    });
  } catch(e) {}
}

while ((match = pathRegex2.exec(svgContent)) !== null) {
  const d = match[1];
  const color = match[2].toLowerCase();
  if (['#e1e1e1','#f2f2f2','#ffffff','#fefee9','#e0e0e0','#000000','#c22938','#00dcff'].includes(color)) continue;
  
  try {
    const [left, top, right, bottom] = getBounds(d);
    allPaths.push({
      color,
      left: left + TX,
      top: top + TY,
      right: right + TX,
      bottom: bottom + TY,
      cx: (left + right) / 2 + TX,
      cy: (top + bottom) / 2 + TY,
      area: (right - left) * (bottom - top)
    });
  } catch(e) {}
}

console.log(`Found ${allPaths.length} region paths total\n`);

// For each label, find the smallest path that contains the label point
console.log("=== ACCURATE MAPPING (point-in-bounds, smallest area) ===\n");
labels.forEach(label => {
  const containing = allPaths.filter(p => 
    label.x >= p.left && label.x <= p.right &&
    label.y >= p.top && label.y <= p.bottom
  );
  
  // Sort by area (smallest first = most specific)
  containing.sort((a, b) => a.area - b.area);
  
  if (containing.length > 0) {
    console.log(`${label.text}: ${containing[0].color} (area=${Math.round(containing[0].area)}, ${containing.length} containers)`);
  } else {
    // Fallback: closest center
    let closest = null;
    let minDist = Infinity;
    allPaths.forEach(p => {
      const d = Math.hypot(label.x - p.cx, label.y - p.cy);
      if (d < minDist) { minDist = d; closest = p; }
    });
    console.log(`${label.text}: ${closest ? closest.color : 'NONE'} (NEAREST, dist=${Math.round(minDist)})`);
  }
});

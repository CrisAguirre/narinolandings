const fs = require('fs');
const getBounds = require('svg-path-bounds');

const svgContent = fs.readFileSync('public/assets/1.svg', 'utf-8');

const textRegex = /x="([0-9.-]+)"\s+y="([0-9.-]+)".*?>([^<]+)<\/tspan>/gs;
const labels = [];
let textMatch;
while ((textMatch = textRegex.exec(svgContent)) !== null) {
  labels.push({
    x: parseFloat(textMatch[1]),
    y: parseFloat(textMatch[2]),
    text: textMatch[3]
  });
}

const pathRegex = /<path[^>]*d="([^"]+)"[^>]*>/gs;
const colorBounds = {}; // { color: { minX, minY, maxX, maxY } }

let pathMatch;
while ((pathMatch = pathRegex.exec(svgContent)) !== null) {
  const d = pathMatch[1];
  const fullTag = pathMatch[0];
  
  const styleMatch = fullTag.match(/style="[^"]*fill:\s*(#[0-9a-fA-F]{6})/i);
  const fillMatch = fullTag.match(/fill="(#[0-9a-fA-F]{6})"/i);
  const color = (styleMatch && styleMatch[1]) || (fillMatch && fillMatch[1]);
  
  if (color && !['#f2f2f2', '#e1e1e1', '#c22938', '#e0e0e0', '#00dcff', '#fefee9', '#000000'].includes(color.toLowerCase())) {
    try {
      const [left, top, right, bottom] = getBounds(d);
      const c = color.toLowerCase();
      
      if (!colorBounds[c]) {
        colorBounds[c] = { left, top, right, bottom };
      } else {
        colorBounds[c].left = Math.min(colorBounds[c].left, left);
        colorBounds[c].top = Math.min(colorBounds[c].top, top);
        colorBounds[c].right = Math.max(colorBounds[c].right, right);
        colorBounds[c].bottom = Math.max(colorBounds[c].bottom, bottom);
      }
    } catch (e) {}
  }
}

labels.forEach(label => {
  let matchedColors = [];
  
  for (const [color, bounds] of Object.entries(colorBounds)) {
    if (label.x >= bounds.left && label.x <= bounds.right && label.y >= bounds.top && label.y <= bounds.bottom) {
      matchedColors.push(color);
    }
  }
  
  console.log(`Region: ${label.text} @ (${label.x}, ${label.y})`);
  console.log(`Matched colors: ${matchedColors.join(', ')}\n`);
});

const fs = require('fs');
const getBounds = require('svg-path-bounds');

const svgContent = fs.readFileSync('public/assets/1.svg', 'utf-8');

// Parse text elements and their coordinates
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

// Parse path elements
const pathRegex = /<path[^>]*d="([^"]+)"[^>]*>/gs;
const paths = [];
let pathMatch;
while ((pathMatch = pathRegex.exec(svgContent)) !== null) {
  const d = pathMatch[1];
  const fullTag = pathMatch[0];
  
  // Extract color
  const styleMatch = fullTag.match(/style="[^"]*fill:\s*(#[0-9a-fA-F]{6})/i);
  const fillMatch = fullTag.match(/fill="(#[0-9a-fA-F]{6})"/i);
  const color = (styleMatch && styleMatch[1]) || (fillMatch && fillMatch[1]);
  
  if (color && !['#f2f2f2', '#e1e1e1', '#c22938', '#e0e0e0', '#00dcff', '#fefee9', '#000000'].includes(color.toLowerCase())) {
    try {
      const [left, top, right, bottom] = getBounds(d);
      paths.push({
        color: color.toLowerCase(),
        cx: (left + right) / 2,
        cy: (top + bottom) / 2,
        bounds: { left, top, right, bottom }
      });
    } catch (e) {}
  }
}

// Now map each label to the color of the path whose bounding box contains the label's coordinate (or is closest)
labels.forEach(label => {
  let matchedColor = null;
  let minDistance = Infinity;

  paths.forEach(path => {
    const dx = label.x - path.cx;
    const dy = label.y - path.cy;
    const distance = Math.sqrt(dx*dx + dy*dy);
    
    if (distance < minDistance) {
      minDistance = distance;
      matchedColor = path.color;
    }
  });

  console.log(`Region: ${label.text} => Color: ${matchedColor}`);
});

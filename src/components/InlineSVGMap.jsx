import React, { useRef, useEffect, useState, useCallback } from "react";
import { getMunicipioByName } from "../data/municipiosData";

export default function InlineSVGMap({ svgPath, onRegionClick, onRegionHover, onRegionLeave, onColombiaHover, onColombiaLeave, groupByColor = false }) {
  const containerRef = useRef(null);
  const [svgMarkup, setSvgMarkup] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(svgPath)
      .then((res) => res.text())
      .then((svgText) => {
        if (cancelled) return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const svgEl = doc.querySelector("svg");
        if (!svgEl) return;

        const w = svgEl.getAttribute("width");
        const h = svgEl.getAttribute("height");
        if (!svgEl.getAttribute("viewBox") && w && h) {
          svgEl.setAttribute("viewBox", "0 0 " + w + " " + h);
        }

        svgEl.setAttribute("width", "100%");
        svgEl.setAttribute("height", "100%");
        svgEl.style.maxHeight = "70vh";
        svgEl.style.display = "block";
        svgEl.style.margin = "0 auto";

        const paths = svgEl.querySelectorAll("path");
        paths.forEach((path, index) => {
          const id = path.getAttribute("id") || ("path-" + index);
          path.setAttribute("data-region-id", id);
          
          // Safely check if path is in the Localizador (Colombia map) group
          let isColombia = false;
          try {
            let current = path.parentElement;
            while(current && current.tagName === 'g' || current.tagName === 'G') {
              if (current.getAttribute('inkscape:label') === 'Localizador') {
                isColombia = true;
                break;
              }
              current = current.parentElement;
            }
          } catch(e) {}
          
          if (isColombia) {
            path.classList.add("map-path", "colombia-path");
            path.setAttribute("data-map-type", "colombia");
          } else {
            path.classList.add("map-path", "narino-path");
            path.setAttribute("data-map-type", "narino");
          }

          // Extract fill color for grouping
          const styleAttr = path.getAttribute("style") || "";
          const fillMatch = styleAttr.match(/fill:\s*(#[0-9a-fA-F]{6}|[a-zA-Z]+)/);
          let fillColor = "none";
          if (fillMatch) {
            fillColor = fillMatch[1].toLowerCase();
          } else {
            const fillAttr = path.getAttribute("fill");
            if (fillAttr) fillColor = fillAttr.toLowerCase();
          }
          path.setAttribute("data-fill-color", fillColor);
        });

        const serializer = new XMLSerializer();
        const result = serializer.serializeToString(svgEl);
        setSvgMarkup(result);
        setLoaded(true);
      })
      .catch((err) => console.error("Error loading SVG:", err));

    return () => { cancelled = true; };
  }, [svgPath]);

  const getPathsToHighlight = (path) => {
    if (!path) return [];
    
    // For Colombia minimap, don't group by color
    if (path.getAttribute("data-map-type") === "colombia") {
      return [path];
    }

    if (!groupByColor) return [path];
    
    const color = path.getAttribute("data-fill-color");
    // Don't group background/borders/none
    if (!color || color === 'none' || color === '#e1e1e1' || color === '#ffffff' || color === '#fefee9' || color === '#e0e0e0') {
      return [path];
    }
    
    return Array.from(containerRef.current.querySelectorAll(`.map-path[data-map-type="narino"][data-fill-color="${color}"]`));
  };

  const handleClick = useCallback((e) => {
    const path = e.target.closest(".map-path");
    if (path) {
      if (path.getAttribute("data-map-type") === "colombia") return; // Ignore clicks on Colombia map for now

      if (groupByColor) {
        const color = path.getAttribute("data-fill-color");
        if (onRegionClick) onRegionClick(color);
      } else {
        const id = path.getAttribute("data-region-id");
        if (onRegionClick) onRegionClick(id);
      }
    }
  }, [onRegionClick, groupByColor]);

  const handleMouseOver = useCallback((e) => {
    const path = e.target.closest(".map-path");
    if (path) {
      // Skip background/border paths entirely  
      const pathFillColor = path.getAttribute("data-fill-color");
      const isBg = !pathFillColor || pathFillColor === 'none' || pathFillColor === '#e1e1e1' || pathFillColor === '#ffffff' || pathFillColor === '#fefee9' || pathFillColor === '#e0e0e0' || pathFillColor === '#000000' || pathFillColor === '#f2f2f2' || pathFillColor === '#00dcff';
      if (isBg && path.getAttribute("data-map-type") !== "colombia") return;

      const paths = getPathsToHighlight(path);
      paths.forEach(p => {
        p.style.filter = "brightness(1.4) drop-shadow(0 0 12px rgba(59, 130, 246, 0.7))";
        p.style.opacity = "0.85";
      });

      // Resolve muniName first if not grouped by color (municipality mode)
      let muniName = null;
      if (!groupByColor && path.getAttribute("data-map-type") === "narino") {
        muniName = path.getAttribute("data-muni-name");
        if (!muniName) {
          const pathBBox = path.getBoundingClientRect();
          const px = pathBBox.left + pathBBox.width / 2;
          const py = pathBBox.top + pathBBox.height / 2;
          
          let bestName = "Municipio (ID: " + path.getAttribute("data-region-id") + ")";
          let bestDist = Infinity;
          
          const tspans = containerRef.current.querySelectorAll("tspan");
          tspans.forEach(tspan => {
            const tBBox = tspan.getBoundingClientRect();
            const tx = tBBox.left + tBBox.width / 2;
            const ty = tBBox.top + tBBox.height / 2;
            const dist = Math.sqrt((px - tx)**2 + (py - ty)**2);
            if (dist < bestDist && dist < 150) { 
              bestDist = dist;
              bestName = tspan.textContent.trim();
            }
          });
          muniName = bestName;
          path.setAttribute("data-muni-name", muniName);
        }
      }

      // For municipality mode: dim all OTHER Nariño paths for contrast
      if (!groupByColor && (path.getAttribute("data-map-type") === "narino")) {
        const allNarino = containerRef.current.querySelectorAll('.narino-path');
        allNarino.forEach(p => {
          if (!paths.includes(p)) {
            p.style.filter = "brightness(0.7) saturate(0.5)";
            p.style.opacity = "0.5";
          }
        });
        
        // Find subregion color to apply to this municipality
        const muniData = muniName ? getMunicipioByName(muniName) : null;
        const hoverColor = muniData ? muniData.color : null;

        // Add a bright stroke and subregion color fill to the hovered municipality
        paths.forEach(p => {
          p.setAttribute("data-orig-stroke", p.style.stroke || "");
          p.setAttribute("data-orig-stroke-width", p.style.strokeWidth || "");
          if (hoverColor) {
            p.setAttribute("data-orig-fill", p.style.fill || "");
            p.style.fill = hoverColor;
          }
          p.style.stroke = "#ffffff";
          p.style.strokeWidth = "2.5px";
          p.style.filter = "brightness(1.5) drop-shadow(0 0 14px rgba(59, 130, 246, 0.8))";
          p.style.opacity = "1";
        });
      }

      if (path.getAttribute("data-map-type") === "colombia") {
        if (onColombiaHover) onColombiaHover(path.getAttribute("data-fill-color"));
      } else {
        if (groupByColor) {
          const color = path.getAttribute("data-fill-color");
          if (onRegionHover) onRegionHover(color);
        } else {
          const id = path.getAttribute("data-region-id");
          if (onRegionHover) onRegionHover({ id, name: muniName });
        }
      }
    }
  }, [onRegionHover, onColombiaHover, groupByColor]);

  const handleMouseOut = useCallback((e) => {
    const path = e.target.closest(".map-path");
    if (path) {
      const paths = getPathsToHighlight(path);
      paths.forEach(p => {
        p.style.filter = "";
        p.style.opacity = "";
        // Restore original stroke if it was changed
        if (p.hasAttribute("data-orig-stroke")) {
          p.style.stroke = p.getAttribute("data-orig-stroke");
          p.style.strokeWidth = p.getAttribute("data-orig-stroke-width");
        }
        // Restore original fill if it was changed
        if (p.hasAttribute("data-orig-fill")) {
          p.style.fill = p.getAttribute("data-orig-fill");
        }
      });
      
      // Restore all other Nariño paths in municipality mode
      if (!groupByColor) {
        const allNarino = containerRef.current.querySelectorAll('.narino-path');
        allNarino.forEach(p => {
          p.style.filter = "";
          p.style.opacity = "";
        });
      }
      
      if (path.getAttribute("data-map-type") === "colombia") {
        if (onColombiaLeave) onColombiaLeave();
      } else {
        if (onRegionLeave) onRegionLeave();
      }
    }
  }, [onRegionLeave, onColombiaLeave, groupByColor]);

  if (!loaded) {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ minHeight: "300px" }}>
        <div className="text-slate-400 animate-pulse text-lg">Cargando mapa...</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="w-full h-full flex items-center justify-center"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

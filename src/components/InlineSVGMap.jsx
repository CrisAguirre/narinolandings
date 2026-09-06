import React, { useRef, useEffect, useState, useCallback } from "react";

export default function InlineSVGMap({ svgPath, onRegionClick, onRegionHover, onRegionLeave, groupByColor = false }) {
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
          path.classList.add("map-path");

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
    if (!groupByColor) return [path];
    
    const color = path.getAttribute("data-fill-color");
    // Don't group background/borders/none
    if (!color || color === 'none' || color === '#e1e1e1' || color === '#ffffff' || color === '#fefee9' || color === '#e0e0e0') {
      return [path];
    }
    
    return Array.from(containerRef.current.querySelectorAll(`.map-path[data-fill-color="${color}"]`));
  };

  const handleClick = useCallback((e) => {
    const path = e.target.closest(".map-path");
    if (path) {
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
      const paths = getPathsToHighlight(path);
      paths.forEach(p => {
        p.style.filter = "brightness(1.4) drop-shadow(0 0 12px rgba(59, 130, 246, 0.7))";
        p.style.opacity = "0.85";
      });

      if (groupByColor) {
        const color = path.getAttribute("data-fill-color");
        if (onRegionHover) onRegionHover(color);
      } else {
        const id = path.getAttribute("data-region-id");
        if (onRegionHover) onRegionHover(id);
      }
    }
  }, [onRegionHover, groupByColor]);

  const handleMouseOut = useCallback((e) => {
    const path = e.target.closest(".map-path");
    if (path) {
      const paths = getPathsToHighlight(path);
      paths.forEach(p => {
        p.style.filter = "";
        p.style.opacity = "";
      });
      if (onRegionLeave) onRegionLeave();
    }
  }, [onRegionLeave, groupByColor]);

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

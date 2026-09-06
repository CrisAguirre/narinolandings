import React, { useRef, useEffect, useState, useCallback } from "react";

export default function InlineSVGMap({ svgPath, onRegionClick, onRegionHover, onRegionLeave }) {
  const containerRef = useRef(null);
  const [svgMarkup, setSvgMarkup] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(svgPath)
      .then((res) => res.text())
      .then((svgText) => {
        if (cancelled) return;

        // Parse to modify attributes
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const svgEl = doc.querySelector("svg");
        if (!svgEl) return;

        // Set proper viewBox if missing
        const w = svgEl.getAttribute("width");
        const h = svgEl.getAttribute("height");
        if (!svgEl.getAttribute("viewBox") && w && h) {
          svgEl.setAttribute("viewBox", "0 0 " + w + " " + h);
        }

        // Make SVG responsive
        svgEl.setAttribute("width", "100%");
        svgEl.setAttribute("height", "100%");
        svgEl.style.maxHeight = "70vh";
        svgEl.style.display = "block";
        svgEl.style.margin = "0 auto";

        // Add class to all paths for CSS styling
        const paths = svgEl.querySelectorAll("path");
        paths.forEach((path, index) => {
          const id = path.getAttribute("id") || ("path-" + index);
          path.setAttribute("data-region-id", id);
          path.classList.add("map-path");
        });

        // Serialize back to string
        const serializer = new XMLSerializer();
        const result = serializer.serializeToString(svgEl);
        setSvgMarkup(result);
        setLoaded(true);
      })
      .catch((err) => console.error("Error loading SVG:", err));

    return () => { cancelled = true; };
  }, [svgPath]);

  // Event delegation using React synthetic events on the wrapper div
  const handleClick = useCallback((e) => {
    const path = e.target.closest(".map-path");
    if (path) {
      const id = path.getAttribute("data-region-id");
      if (onRegionClick) onRegionClick(id);
    }
  }, [onRegionClick]);

  const handleMouseOver = useCallback((e) => {
    const path = e.target.closest(".map-path");
    if (path) {
      path.style.filter = "brightness(1.4) drop-shadow(0 0 12px rgba(59, 130, 246, 0.7))";
      path.style.opacity = "0.85";
      const id = path.getAttribute("data-region-id");
      if (onRegionHover) onRegionHover(id);
    }
  }, [onRegionHover]);

  const handleMouseOut = useCallback((e) => {
    const path = e.target.closest(".map-path");
    if (path) {
      path.style.filter = "";
      path.style.opacity = "";
      if (onRegionLeave) onRegionLeave();
    }
  }, [onRegionLeave]);

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

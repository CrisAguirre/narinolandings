import React, { useState } from "react";
import { motion } from "framer-motion";
import MapContainer3D from "./MapContainer3D";
import InlineSVGMap from "./InlineSVGMap";
import GlassPanel from "./GlassPanel";
import { regionsData } from "../data/regionsData";
import svg1Url from "../assets/1.svg?url";
import svg2Url from "../assets/2.svg?url";

export default function MapViewer() {
  const [activeTab, setActiveTab] = useState("regiones");
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleRegionClick = (id) => {
    setSelectedId(id);
    setIsPanelOpen(true);
  };

  const handleRegionHover = (id) => {
    setHoveredId(id);
  };

  const handleRegionLeave = () => {
    setHoveredId(null);
  };

  const currentData = regionsData[selectedId] || regionsData["default"];

  const getTabClass = (tabId) => {
    let base = "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 ";
    if (activeTab === tabId) {
      return base + "text-slate-900";
    }
    return base + "text-slate-300 hover:text-white";
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-slate-900">
      {/* Background blobs for glassmorphism */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 w-full p-6 flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400">
            Nariño Interactivo 3D
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-lg mx-auto">
            Explora el departamento de Nariño a través de su división regional y municipal. 
            Haz clic en las zonas para más información.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-full relative">
          <button
            onClick={() => { setActiveTab("regiones"); setIsPanelOpen(false); }}
            className={getTabClass("regiones")}
          >
            Subregiones
            {activeTab === "regiones" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full -z-10 shadow-lg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>

          <button
            onClick={() => { setActiveTab("municipios"); setIsPanelOpen(false); }}
            className={getTabClass("municipios")}
          >
            Municipios
            {activeTab === "municipios" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full -z-10 shadow-lg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        </div>
      </header>

      {/* Map Area */}
      <main className="flex-1 relative z-10 overflow-hidden">
        <div style={{ perspective: "1200px" }} className="w-full h-full flex items-center justify-center">
          <MapContainer3D>
            {activeTab === "regiones" ? (
              <InlineSVGMap
                svgPath={svg1Url}
                onRegionClick={handleRegionClick}
                onRegionHover={handleRegionHover}
                onRegionLeave={handleRegionLeave}
              />
            ) : (
              <InlineSVGMap
                svgPath={svg2Url}
                onRegionClick={handleRegionClick}
                onRegionHover={handleRegionHover}
                onRegionLeave={handleRegionLeave}
              />
            )}
          </MapContainer3D>
        </div>
      </main>

      {/* Glass Panel */}
      <GlassPanel
        isOpen={isPanelOpen}
        data={currentData}
        onClose={() => setIsPanelOpen(false)}
      />
    </div>
  );
}

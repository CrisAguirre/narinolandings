import React, { useState } from "react";
import { motion } from "framer-motion";
import MapContainer3D from "./MapContainer3D";
import RegionMap from "./RegionMap";
import GlassPanel from "./GlassPanel";
import { regionsData } from "../data/regionsData";

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
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none" />
      
      <header className="relative z-20 w-full p-6 flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400">
            Nariño Interactivo 3D
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base max-w-lg mx-auto">
            Explora el departamento de Nariño a través de su división regional y municipal. Haz clic en las zonas para más información.
          </p>
        </div>

        <div className="flex bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-full relative">
          <button
            onClick={() => setActiveTab("regiones")}
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
            onClick={() => setActiveTab("municipios")}
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

      <main className="flex-1 relative z-10">
        {activeTab === "regiones" ? (
          <MapContainer3D>
            <RegionMap 
              onRegionClick={handleRegionClick}
              onRegionHover={handleRegionHover}
              onRegionLeave={handleRegionLeave}
            />
          </MapContainer3D>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8">
            <div className="glass-panel p-8 text-center max-w-md">
              <h2 className="text-xl font-bold text-slate-100 mb-2">Mapa de Municipios</h2>
              <p className="text-slate-400 text-sm">
                Estamos a la espera del archivo SVG vectorial correcto para los municipios. 
                El archivo actual es una imagen plana que no permite interacción 3D por zonas.
              </p>
            </div>
          </div>
        )}
      </main>

      <GlassPanel 
        isOpen={isPanelOpen} 
        data={currentData} 
        onClose={() => setIsPanelOpen(false)} 
      />
    </div>
  );
}

import React, { useState } from "react";
import InlineSVGMap from "./InlineSVGMap";
import { getRegionByColor } from "../data/regionsData";
import EvaluationTab from "./EvaluationTab"; 

export default function MapViewer() {
  const [activeTab, setActiveTab] = useState("subregiones"); // 'subregiones', 'municipios', 'evaluacion'
  
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [hoveredMuni, setHoveredMuni] = useState(null);
  const [hoveredColombia, setHoveredColombia] = useState(false);
  const [isNarinoColombia, setIsNarinoColombia] = useState(false);
  
  // Data for Nariño subregions (based on color)
  const handleRegionHover = (color) => {
    const region = getRegionByColor(color);
    if (region) {
      setHoveredRegion(region);
    } else {
      setHoveredRegion(null);
    }
  };

  const handleRegionLeave = () => {
    setHoveredRegion(null);
  };

  // Data for individual municipalities
  const handleMuniHover = (data) => {
    setHoveredMuni({
      name: data.name,
      description: `Explora el municipio de ${data.name}. En futuras versiones, aquí se mostrarán estadísticas, cultura, economía y turismo de esta zona.`
    });
  };

  const handleMuniLeave = () => {
    setHoveredMuni(null);
  };
  
  const handleColombiaHover = (color) => {
    setHoveredColombia(true);
    // If the path is red, it's Nariño
    if (color && (color.includes("#c22938") || color.includes("red"))) {
      setIsNarinoColombia(true);
    } else {
      setIsNarinoColombia(false);
    }
  };

  const handleColombiaLeave = () => {
    setHoveredColombia(false);
    setIsNarinoColombia(false);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden pb-6 relative">
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 z-20 pointer-events-none text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400 drop-shadow-sm mb-2">
          Nariño Interactivo 3D
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto drop-shadow-md bg-slate-900/50 p-2 rounded-lg backdrop-blur-sm text-sm">
          Explora el departamento de Nariño a través de su división regional y municipal. Haz clic en las zonas para más información.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-32 mb-4 z-10 pointer-events-auto">
        <div className="bg-slate-800/80 backdrop-blur-md p-1 rounded-full border border-slate-700/50 flex shadow-lg">
          <button 
            onClick={() => setActiveTab("subregiones")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'subregiones' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
          >
            Subregiones
          </button>
          <button 
            onClick={() => setActiveTab("municipios")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'municipios' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
          >
            Municipios
          </button>
          <button 
            onClick={() => setActiveTab("evaluacion")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'evaluacion' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
          >
            Evaluación
          </button>
        </div>
      </div>

      {activeTab !== "evaluacion" && (
        <div className="flex-1 relative flex items-center justify-center">
          
          {/* Main Map View */}
          <div className="w-full max-w-4xl h-full p-4 relative">
            {activeTab === "subregiones" ? (
              <InlineSVGMap 
                svgPath="/src/assets/1.svg" 
                groupByColor={true}
                onRegionHover={handleRegionHover}
                onRegionLeave={handleRegionLeave}
                onColombiaHover={handleColombiaHover}
                onColombiaLeave={handleColombiaLeave}
              />
            ) : (
              <InlineSVGMap 
                svgPath="/src/assets/2.svg" 
                groupByColor={false}
                onRegionHover={handleMuniHover}
                onRegionLeave={handleMuniLeave}
                onColombiaHover={handleColombiaHover}
                onColombiaLeave={handleColombiaLeave}
              />
            )}
          </div>

          {/* Right Side Panel for Nariño */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-80 pointer-events-none transition-all duration-300">
            {(activeTab === "subregiones" && hoveredRegion) ? (
              <div className="glass-panel p-6 shadow-2xl bg-slate-800/90 border-slate-700/50 text-slate-100 transform translate-x-0 opacity-100 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{hoveredRegion.name}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{hoveredRegion.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">Características Principales</h4>
                  <ul className="text-sm text-slate-300 space-y-1.5">
                    {hoveredRegion.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (activeTab === "municipios" && hoveredMuni) ? (
              <div className="glass-panel p-6 shadow-2xl bg-slate-800/90 border-slate-700/50 text-slate-100 transform translate-x-0 opacity-100 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{hoveredMuni.name}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{hoveredMuni.description}</p>
              </div>
            ) : null}
          </div>

          {/* Left Side Panel for Colombia Minimap */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-72 pointer-events-none transition-all duration-300">
            {hoveredColombia && (
              <div className="glass-panel p-5 shadow-2xl bg-slate-800/90 border-slate-700/50 text-slate-100 transform translate-x-0 opacity-100 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {isNarinoColombia ? "Nariño (Colombia)" : "Departamento de Colombia"}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isNarinoColombia 
                    ? "El departamento de Nariño se ubica en el suroccidente de Colombia, limitando con Ecuador y el Océano Pacífico."
                    : "Colombia se divide en 32 departamentos y un Distrito Capital. Explora su diversidad geográfica y cultural."}
                </p>
              </div>
            )}
          </div>

        </div>
      )}

      {/* Evaluation Module will go here */}
      {activeTab === "evaluacion" && (
        <div className="flex-1 overflow-y-auto w-full h-full">
          <EvaluationTab />
        </div>
      )}

    </div>
  );
}

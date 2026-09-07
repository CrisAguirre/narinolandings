import React, { useState } from "react";
import InlineSVGMap from "./InlineSVGMap";
import { getRegionByColor } from "../data/regionsData";
import { getMunicipioByName } from "../data/municipiosData";
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
    const muniInfo = getMunicipioByName(data.name);
    if (muniInfo) {
      setHoveredMuni(muniInfo);
    } else {
      setHoveredMuni({
        name: data.name,
        subregion: "",
        color: "#64748b",
        description: `Municipio del departamento de Nariño.`,
        facts: []
      });
    }
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
      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 z-20 pointer-events-none text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400 drop-shadow-sm mb-1 md:mb-2 mt-2 md:mt-0">
          Nariño Interactivo 3D
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto drop-shadow-md bg-slate-900/50 p-2 rounded-lg backdrop-blur-sm text-xs md:text-sm hidden sm:block">
          Explora el departamento de Nariño a través de su división regional y municipal. Haz clic en las zonas para más información.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-20 md:mt-32 mb-2 md:mb-4 z-10 pointer-events-auto px-4">
        <div className="bg-slate-800/80 backdrop-blur-md p-1 rounded-3xl md:rounded-full border border-slate-700/50 flex flex-wrap justify-center shadow-lg gap-1 md:gap-0 max-w-full">
          <button 
            onClick={() => setActiveTab("subregiones")}
            className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab === 'subregiones' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
          >
            Subregiones
          </button>
          <button 
            onClick={() => setActiveTab("municipios")}
            className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab === 'municipios' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
          >
            Municipios
          </button>
          <button 
            onClick={() => setActiveTab("evaluacion")}
            className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab === 'evaluacion' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
          >
            Evaluación
          </button>
        </div>
      </div>

      {activeTab !== "evaluacion" && (
        <div className="flex-1 relative flex flex-col md:flex-row items-center">
          
          {/* Main Map View */}
          <div className="w-full max-w-4xl h-full p-2 md:p-4 relative md:ml-8">
            {activeTab === "subregiones" ? (
              <InlineSVGMap 
                svgPath="/assets/1.svg" 
                groupByColor={true}
                onRegionHover={handleRegionHover}
                onRegionLeave={handleRegionLeave}
                onColombiaHover={handleColombiaHover}
                onColombiaLeave={handleColombiaLeave}
              />
            ) : (
              <InlineSVGMap 
                svgPath="/assets/2.svg" 
                groupByColor={false}
                onRegionHover={handleMuniHover}
                onRegionLeave={handleMuniLeave}
                onColombiaHover={handleColombiaHover}
                onColombiaLeave={handleColombiaLeave}
              />
            )}
          </div>

          {/* Right Side Panel for Nariño - Wider to accommodate image */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-auto md:left-auto md:right-4 md:top-1/2 md:-translate-y-1/2 md:-translate-x-[200px] w-[35%] pointer-events-none transition-all duration-300 z-30">
            {(activeTab === "subregiones" && hoveredRegion) ? (
              <div className="glass-panel shadow-2xl bg-slate-800/90 border-slate-700/50 text-slate-100 transform translate-x-0 opacity-100 transition-all duration-300 rounded-2xl overflow-hidden">
                {/* Image at top */}
                <div className="w-full h-56 bg-slate-700 overflow-hidden rounded-t-2xl">
                  <img 
                    src={hoveredRegion.image} 
                    alt={hoveredRegion.name}
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                
                <div className="p-6">
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
              </div>
            ) : (activeTab === "municipios" && hoveredMuni) ? (
              <div className="glass-panel shadow-2xl bg-slate-800/90 border-slate-700/50 text-slate-100 transform translate-x-0 opacity-100 transition-all duration-300 rounded-2xl overflow-hidden">
{/* Image at top */}
                 <div className="w-full h-56 bg-slate-700 overflow-hidden rounded-t-2xl">
                   <img 
                     src={hoveredMuni.image} 
                     alt={hoveredMuni.name}
                     className="w-full h-full object-contain"
                     onError={(e) => { e.target.style.display = 'none'; }}
                   />
                 </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: hoveredMuni.color + '33' }}>
                      <svg className="w-5 h-5" style={{ color: hoveredMuni.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{hoveredMuni.name}</h3>
                      {hoveredMuni.subregion && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full mt-0.5 inline-block" style={{ backgroundColor: hoveredMuni.color + '25', color: hoveredMuni.color }}>
                          Subregión {hoveredMuni.subregion}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3 mt-2">{hoveredMuni.description}</p>
                  
                  {hoveredMuni.facts && hoveredMuni.facts.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: hoveredMuni.color }}>Datos Clave</h4>
                      <ul className="text-sm text-slate-300 space-y-1.5">
                        {hoveredMuni.facts.map((fact, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2" style={{ color: hoveredMuni.color }}>•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>

        </div>
      )}

      {/* Evaluation Module will go here */}
      {activeTab === "evaluacion" && (
        <div className="flex-1 min-h-0 overflow-y-auto w-full relative z-10">
          <EvaluationTab />
        </div>
      )}

    </div>
  );
}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

export default function GlassPanel({ isOpen, data, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && data && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-8 right-8 z-50 w-80 glass-panel p-6 text-slate-100"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-blue-400" size={24} />
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-emerald-300">
              {data.name}
            </h2>
          </div>
          
          <p className="text-sm text-slate-300 mb-4 leading-relaxed">
            {data.description}
          </p>
          
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Características Principales
            </h3>
            {data.characteristics?.length > 0 ? (
              <ul className="space-y-1">
                {data.characteristics.map((char, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {char}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm italic text-slate-400">Sin detalles adicionales.</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

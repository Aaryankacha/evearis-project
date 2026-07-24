import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductGallery = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);

  const galleryViews = [
    { label: 'Chassis View', perspective: 'front' },
    { label: 'Silicon Die', perspective: 'die' },
    { label: 'Thermal Array', perspective: 'thermal' }
  ];

  return (
    <div className="space-y-6">
      {/* Main Viewport Card */}
      <div className="relative bg-[#242424] border border-white/5 rounded-[24px] p-12 h-96 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="w-64 h-64 flex items-center justify-center text-white">
              <svg viewBox="0 0 240 240" className="w-full h-full">
                <circle cx="120" cy="120" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" strokeOpacity="0.3" />
                <rect x="60" y="60" width="120" height="120" rx="20" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
                <rect x="80" y="80" width="80" height="80" rx="12" fill="#1C1C1C" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="120" cy="120" r="18" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.8" />
              </svg>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 bg-[#1C1C1C] border border-white/5 rounded-full px-4 py-1.5 text-[10px] font-mono text-[#9D9D9D]">
          PERSPECTIVE: {galleryViews[activeTab].label.toUpperCase()}
        </div>
      </div>

      {/* Gallery Selector Pills */}
      <div className="flex items-center gap-3">
        {galleryViews.map((view, idx) => (
          <button
            key={view.label}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 font-mono ${
              activeTab === idx
                ? 'bg-[#F5F5F5] text-[#1C1C1C] border-[#F5F5F5]'
                : 'bg-[#242424] text-[#9D9D9D] border-white/5 hover:text-white hover:border-white/15'
            }`}
          >
            {view.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;

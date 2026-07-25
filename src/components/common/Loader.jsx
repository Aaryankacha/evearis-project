import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#1C1C1C] flex flex-col items-center justify-center text-white">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-14 h-14 rounded-full bg-white text-[#1C1C1C] font-bold text-[11px] flex items-center justify-center tracking-tighter mb-6 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
      >
        NX
      </motion.div>
      <span className="text-[11px] font-mono font-semibold tracking-[0.3em] uppercase text-[#9D9D9D]">
        INITIALIZING NEXUS TELEMETRY...
      </span>
    </div>
  );
};

export default Loader;


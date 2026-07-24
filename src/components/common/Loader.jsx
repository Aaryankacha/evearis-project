import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#16171d] flex flex-col items-center justify-center text-white">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-16 h-16 rounded-full bg-white text-black font-extrabold text-xl flex items-center justify-center tracking-tighter mb-6 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
      >
        NX
      </motion.div>
      <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-neutral-400">
        INITIALIZING NEXUS TELEMETRY...
      </span>
    </div>
  );
};

export default Loader;

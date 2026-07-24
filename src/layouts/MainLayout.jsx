import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AmbientBackground from '../components/common/AmbientBackground';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const MainLayout = ({ children, noPaddingTop = false }) => {
  const { toastMessage } = useCart();

  return (
    <div className="relative min-h-screen bg-[#1C1C1C] text-white flex flex-col justify-between selection:bg-white selection:text-[#1C1C1C] overflow-hidden">
      {/* Subtle Ambient Background System */}
      <AmbientBackground />

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`relative z-10 flex-grow ${noPaddingTop ? 'pt-0' : 'pt-24'}`}
      >
        {children}
      </motion.main>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-8 right-8 z-50 bg-[#242424] text-white px-6 py-3.5 rounded-full shadow-2xl border border-white/10 flex items-center gap-3 font-semibold text-xs tracking-wider uppercase font-mono"
          >
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MainLayout;

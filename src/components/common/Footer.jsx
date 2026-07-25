import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-[#1C1C1C] text-[#9D9D9D] border-t border-white/5 pt-28 pb-16 px-6 lg:px-12 mt-32 overflow-hidden">
      {/* Subtle Radial Glow at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-20 border-b border-white/5">
        
        {/* Brand Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="md:col-span-1 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-white text-[#1C1C1C] flex items-center justify-center font-bold text-[11px] tracking-tighter">
              NX
            </div>
            <span className="font-semibold text-xs tracking-[0.25em] text-white uppercase">
              NEXUS CORE
            </span>
          </div>
          <p className="text-xs text-[#9D9D9D] leading-relaxed max-w-sm">
            Architects of ultra-grade computer hardware. Minimal, calm, and precision-engineered for maximum compute density.
          </p>
        </motion.div>

        {/* Guarantees */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">Engineering Specs</h4>
          <ul className="space-y-2.5 text-xs">
            <li className="text-[#9D9D9D]">5-Year Global Hardware Warranty</li>
            <li className="text-[#9D9D9D]">Stress-Tested & Silicon Benchmarked</li>
            <li className="text-[#9D9D9D]">Sub-24hr Stealth Dispatch</li>
          </ul>
        </motion.div>

        {/* Ecosystem Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">Ecosystem</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link to="/products" className="hover:text-white transition-colors">Graphics Cards</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Processors & Boards</Link></li>
            <li><Link to="/pc-builder" className="hover:text-white transition-colors">Rig Configurator</Link></li>
            <li><Link to="/cart" className="hover:text-white transition-colors">Order Telemetry</Link></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">Updates</h4>
          <p className="text-xs text-[#9D9D9D]">Receive priority allocations on upcoming hardware drops.</p>
          <div className="flex items-center bg-[#242424] border border-white/5 rounded-full p-1">
            <input 
              type="email" 
              placeholder="ENTER EMAIL" 
              className="bg-transparent px-4 text-xs text-white placeholder-[#9D9D9D] focus:outline-none w-full font-mono"
            />
            <button className="bg-[#F5F5F5] text-[#1C1C1C] p-2.5 rounded-full hover:bg-[#EAEAEA] transition-colors shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto pt-10 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-[#9D9D9D] tracking-wider uppercase gap-4">
        <p>© 2026 NEXUS CORE INC. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link to="/products" className="hover:text-white transition-colors">HARDWARE</Link>
          <Link to="/pc-builder" className="hover:text-white transition-colors">CONFIGURATOR</Link>
          <Link to="/cart" className="hover:text-white transition-colors">CART</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

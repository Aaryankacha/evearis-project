import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Navbar = ({ isHome = false, splineLoaded = true }) => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hardware', path: '/products' },
    { name: 'PC Builder', path: '/pc-builder' },
    { name: 'Cart', path: '/cart' },
  ];

  return (
    <motion.header
      initial={isHome ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: (isHome && !splineLoaded) ? 0 : 1 }}
      transition={{ duration: 0.8, delay: isHome ? 0.2 : 0, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(92%, 1400px)',
        height: 'auto',
        background: 'transparent',
        backgroundColor: 'transparent',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      }}
      className="z-50 pointer-events-auto"
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo Left */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-full bg-white text-[#1C1C1C] flex items-center justify-center font-bold text-[11px] tracking-tighter">
            NX
          </div>
          <span className="font-semibold text-xs tracking-[0.25em] text-white uppercase group-hover:text-[#9D9D9D] transition-colors">
            NEXUS CORE
          </span>
        </Link>

        {/* Menu Centered */}
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase font-mono">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-200 py-1 ${
                  isActive ? 'text-white font-semibold' : 'text-[#9D9D9D] hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Right */}
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative p-2 text-[#9D9D9D] hover:text-white transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-[#1C1C1C] text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono">
                {totalItems}
              </span>
            )}
          </Link>

          <Link to="/pc-builder" className="hidden sm:block">
            <Button variant="primary" size="sm">
              Configurator
            </Button>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-[#9D9D9D] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#1C1C1C]/95 backdrop-blur-md px-6 py-6 border border-white/10 rounded-2xl space-y-4 text-xs font-mono tracking-widest uppercase text-center shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#9D9D9D] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link to="/pc-builder" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                Configurator
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;

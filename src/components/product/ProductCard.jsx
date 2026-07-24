import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const formattedPrice =
    typeof product.price === 'number'
      ? `$${product.price.toLocaleString()}`
      : product.price || '$0';

  const renderProductIllustration = (variant) => {
    switch (variant) {
      case 'processor':
        return (
          <svg viewBox="0 0 220 140" className="w-full h-24 text-white/90">
            <rect x="48" y="40" width="124" height="60" rx="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="62" y="54" width="18" height="32" rx="4" fill="currentColor" fillOpacity="0.8" />
            <rect x="90" y="54" width="18" height="32" rx="4" fill="currentColor" fillOpacity="0.8" />
            <rect x="118" y="54" width="18" height="32" rx="4" fill="currentColor" fillOpacity="0.8" />
            <rect x="146" y="54" width="18" height="32" rx="4" fill="currentColor" fillOpacity="0.8" />
          </svg>
        );
      case 'motherboard':
        return (
          <svg viewBox="0 0 220 140" className="w-full h-24 text-white/90">
            <rect x="42" y="34" width="136" height="72" rx="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="56" y="48" width="22" height="12" rx="3" fill="currentColor" fillOpacity="0.8" />
            <rect x="86" y="48" width="22" height="12" rx="3" fill="currentColor" fillOpacity="0.8" />
            <rect x="116" y="48" width="22" height="12" rx="3" fill="currentColor" fillOpacity="0.8" />
            <rect x="70" y="72" width="80" height="10" rx="3" fill="currentColor" fillOpacity="0.8" />
          </svg>
        );
      case 'memory':
        return (
          <svg viewBox="0 0 220 140" className="w-full h-24 text-white/90">
            <rect x="58" y="38" width="104" height="64" rx="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="72" y="52" width="76" height="10" rx="3" fill="currentColor" fillOpacity="0.8" />
            <rect x="72" y="70" width="76" height="10" rx="3" fill="currentColor" fillOpacity="0.8" />
          </svg>
        );
      case 'storage':
        return (
          <svg viewBox="0 0 220 140" className="w-full h-24 text-white/90">
            <rect x="58" y="42" width="104" height="56" rx="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="74" y="56" width="72" height="22" rx="6" fill="currentColor" fillOpacity="0.8" />
          </svg>
        );
      case 'cooling':
        return (
          <svg viewBox="0 0 220 140" className="w-full h-24 text-white/90">
            <path d="M72 98c0-38 16-58 38-58s38 20 38 58" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="110" cy="80" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case 'monitor':
        return (
          <svg viewBox="0 0 220 140" className="w-full h-24 text-white/90">
            <rect x="44" y="38" width="132" height="80" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="58" y="50" width="104" height="56" rx="6" fill="currentColor" fillOpacity="0.8" />
          </svg>
        );
      case 'case':
        return (
          <svg viewBox="0 0 220 140" className="w-full h-24 text-white/90">
            <rect x="62" y="34" width="96" height="72" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="78" y="48" width="16" height="14" rx="3" fill="currentColor" fillOpacity="0.8" />
            <rect x="100" y="48" width="40" height="14" rx="3" fill="currentColor" fillOpacity="0.8" />
          </svg>
        );
      case 'graphics':
      default:
        return (
          <svg viewBox="0 0 220 140" className="w-full h-24 text-white/90">
            <rect x="48" y="36" width="124" height="68" rx="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="66" y="54" width="36" height="30" rx="6" fill="currentColor" fillOpacity="0.8" />
            <rect x="108" y="54" width="46" height="30" rx="6" fill="currentColor" fillOpacity="0.8" />
          </svg>
        );
    }
  };

  const rawNumericPrice =
    typeof product.price === 'number'
      ? product.price
      : parseFloat(String(product.price).replace(/[^0-9.]/g, '')) || 0;

  return (
    <Card className="flex flex-col justify-between group cursor-pointer overflow-hidden">
      <div>
        {/* Top Tag & Wattage */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9D9D9D] bg-[#1C1C1C] border border-white/5 rounded-full px-3 py-1">
            {product.badge || product.category}
          </span>
          <span className="font-mono text-xs text-[#9D9D9D]">
            {product.power ? `${product.power}W` : 'STD'}
          </span>
        </div>

        {/* Hardware Graphic Stage */}
        <div className="my-4 relative h-48 w-full overflow-hidden flex items-center justify-center bg-[#181818] rounded-[16px] border border-white/5">
          {product.image && !imageError ? (
            <motion.img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full h-full object-cover object-center filter grayscale contrast-[1.1] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full flex items-center justify-center"
            >
              {renderProductIllustration(product.variant || product.category?.toLowerCase())}
            </motion.div>
          )}

          {/* Subtle Stage Lighting Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(24,24,24,0.6)_100%)]" />
        </div>

        {/* Hardware Title & Spec */}
        <div className="space-y-1.5 mt-4">
          <h3 className="text-base font-medium text-white tracking-tight group-hover:text-white/90 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-[#9D9D9D] font-normal line-clamp-2 leading-relaxed">
            {product.tagline || product.spec || product.description}
          </p>
        </div>
      </div>

      {/* Footer Info & Actions */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <div>
          <span className="font-mono text-[10px] text-[#9D9D9D] uppercase tracking-widest block">MSRP</span>
          <span className="font-mono text-base font-semibold text-white">
            {formattedPrice}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ ...product, price: rawNumericPrice });
            }}
            className="p-2.5 bg-[#1C1C1C] border border-white/10 hover:border-white/30 text-white rounded-full transition-colors"
            title="Add to Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>

          <Link to={`/products/${product.id}`} onClick={(e) => e.stopPropagation()}>
            <Button variant="primary" size="sm">
              Specs
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;

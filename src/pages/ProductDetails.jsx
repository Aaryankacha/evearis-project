import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductGallery from '../components/product/ProductGallery';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { INITIAL_PRODUCTS } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, ShieldCheck, Zap, Plus, Minus } from 'lucide-react';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = INITIAL_PRODUCTS.find((p) => String(p.id) === String(id));
    setProduct(found || INITIAL_PRODUCTS[0]);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return null;

  const rawNumericPrice =
    typeof product.price === 'number'
      ? product.price
      : parseFloat(String(product.price).replace(/[^0-9.]/g, '')) || 0;

  const formattedPrice =
    typeof product.price === 'number'
      ? `$${product.price.toLocaleString()}`
      : product.price;

  const relatedProducts = INITIAL_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 space-y-16">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9D9D9D] hover:text-white transition-colors font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Hardware Catalog</span>
        </button>

        {/* Hero Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Gallery View */}
          <ProductGallery product={product} />

          {/* Product Info Panel */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#9D9D9D] uppercase bg-[#242424] border border-white/5 rounded-full px-3.5 py-1">
                  {product.badge || product.category}
                </span>
                <span className="text-xs text-[#9D9D9D] font-mono">
                  AVAILABILITY: READY FOR FULFILLMENT
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                {product.name}
              </h1>

              <p className="text-base text-[#9D9D9D] leading-relaxed font-normal">
                {product.description || product.spec || product.tagline}
              </p>
            </div>

            {/* Price & Cart Card */}
            <Card className="space-y-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-[#9D9D9D] uppercase tracking-widest block font-mono">MSRP PRICE</span>
                  <span className="text-3xl font-mono font-semibold text-white tracking-tight">
                    {formattedPrice}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#9D9D9D] uppercase tracking-widest block font-mono">POWER DRAW</span>
                  <span className="text-sm font-mono text-white font-semibold">{product.power || 100}W TDP</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                {/* Quantity Control */}
                <div className="flex items-center gap-3 bg-[#1C1C1C] border border-white/5 rounded-full px-4 py-2.5">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-[#9D9D9D] hover:text-white transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono font-bold text-white px-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="text-[#9D9D9D] hover:text-white transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => addToCart({ ...product, price: rawNumericPrice }, quantity)}
                  className="flex-1"
                  icon={ShoppingBag}
                >
                  Add to Order
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs text-[#9D9D9D]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span>5-Year Hardware Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-white shrink-0" />
                  <span>Sub-24hr Fulfillment</span>
                </div>
              </div>
            </Card>

            {/* Feature Highlights List */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white font-mono">Engineering Highlights</h3>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-[#9D9D9D] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Specifications Table */}
        {product.specs && (
          <div className="pt-10 border-t border-white/5 space-y-6">
            <h2 className="text-2xl font-light text-white tracking-tight">Technical Specifications</h2>
            <Card className="p-0 overflow-hidden divide-y divide-white/5">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between p-5 text-xs">
                  <span className="text-[#9D9D9D] uppercase font-mono">{key}</span>
                  <span className="text-white font-semibold font-mono">{String(val)}</span>
                </div>
              ))}
            </Card>
          </div>
        )}

        {/* Related Hardware Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8 pt-10 border-t border-white/5">
            <h2 className="text-2xl font-light text-white tracking-tight">Complementary Silicon</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductDetails;

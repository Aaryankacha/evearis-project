import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CartItem from '../components/cart/CartItem';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';

export const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal, tax, shipping, grandTotal } = useCart();

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
          <Heading
            eyebrow="ORDER TELEMETRY"
            title="Shopping Cart"
            align="left"
          />

          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9D9D9D] hover:text-white transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {cart.length === 0 ? (
          <Card className="text-center py-20 space-y-4">
            <ShoppingBag className="w-10 h-10 text-[#9D9D9D] mx-auto" />
            <h3 className="text-xl font-light text-white uppercase tracking-wider">Your cart is empty</h3>
            <p className="text-xs text-[#9D9D9D] font-mono">Select hardware components from the catalog to begin your order.</p>
            <div className="pt-4">
              <Link to="/products">
                <Button variant="primary" size="md">
                  Explore Hardware
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between pb-2 font-mono text-xs text-[#9D9D9D] uppercase tracking-widest">
                <span>
                  {cart.length} LINE {cart.length === 1 ? 'ITEM' : 'ITEMS'}
                </span>
                <button
                  onClick={clearCart}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Cart</span>
                </button>
              </div>

              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <Card hoverEffect={false} className="lg:col-span-1 space-y-6 sticky top-28">
              <h3 className="text-lg font-light text-white tracking-tight uppercase border-b border-white/5 pb-4">
                Order Summary
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between text-[#9D9D9D]">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#9D9D9D]">
                  <span>Estimated Tax (8%)</span>
                  <span className="text-white">${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#9D9D9D]">
                  <span>Freight Shipping</span>
                  <span className="text-white">
                    {shipping === 0 ? 'COMPLIMENTARY' : `$${shipping}`}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-baseline font-mono">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9D9D9D]">Total</span>
                <span className="text-2xl font-semibold text-white">
                  ${grandTotal.toLocaleString()}
                </span>
              </div>

              <Link to="/checkout" className="block">
                <Button variant="primary" size="lg" className="w-full" icon={ArrowRight}>
                  Proceed to Checkout
                </Button>
              </Link>
            </Card>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;

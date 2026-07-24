import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '../components/common/Heading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useCart } from '../context/CartContext';
import { api } from '../services/api';
import { ShieldCheck, ArrowLeft, CreditCard, Lock } from 'lucide-react';

export const Checkout = () => {
  const navigate = useNavigate();
  const { cart, subtotal, tax, shipping, grandTotal, clearCart } = useCart();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States',
    paymentMethod: 'card',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);
    try {
      const orderData = {
        customer: form,
        items: cart,
        summary: { subtotal, tax, shipping, grandTotal },
      };
      const res = await api.createOrder(orderData);
      setCompletedOrder(res);
      clearCart();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (completedOrder) {
    return (
      <MainLayout>
        <div className="max-w-2xl mx-auto px-6 py-24 text-center space-y-8">
          <Card className="p-10 space-y-6">
            <div className="w-16 h-16 bg-[#1C1C1C] border border-white/10 text-white rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9D9D9D]">
                TRANSACTION CONFIRMED
              </span>
              <h1 className="text-3xl font-light text-white tracking-tight">Order Allocated</h1>
              <p className="text-xs font-mono text-[#9D9D9D]">ORDER TELEMETRY ID: {completedOrder.orderId}</p>
            </div>

            <div className="border border-white/5 rounded-[16px] bg-[#1C1C1C] p-6 text-left space-y-3 text-xs font-mono">
              <div className="flex justify-between text-[#9D9D9D]">
                <span>Customer</span>
                <span className="text-white font-medium">{form.fullName}</span>
              </div>
              <div className="flex justify-between text-[#9D9D9D]">
                <span>Destination</span>
                <span className="text-white font-medium">{form.city}, {form.country}</span>
              </div>
              <div className="flex justify-between text-[#9D9D9D]">
                <span>Total Billed</span>
                <span className="text-white font-semibold">${grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/products">
                <Button variant="primary" size="md">
                  Back to Catalog
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/5">
          <Heading
            eyebrow="SECURE CHECKOUT"
            title="Finalize Order"
            align="left"
          />

          <button
            onClick={() => navigate('/cart')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9D9D9D] hover:text-white transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Cart</span>
          </button>
        </div>

        {cart.length === 0 ? (
          <Card className="text-center py-20">
            <p className="text-[#9D9D9D] text-xs font-mono uppercase tracking-widest">
              No items in cart for checkout.
            </p>
            <div className="mt-4">
              <Link to="/products">
                <Button variant="primary" size="md">
                  Browse Hardware
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Customer & Shipping Details */}
            <Card hoverEffect={false} className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white">
                  1. Contact & Shipping Telemetry
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-[#9D9D9D] block mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-[#1C1C1C] border border-white/5 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-white/20 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-[#9D9D9D] block mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@nexuscore.io"
                      className="w-full bg-[#1C1C1C] border border-white/5 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-white/20 font-mono"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-[10px] font-mono uppercase text-[#9D9D9D] block mb-1">Shipping Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={form.address}
                      onChange={handleChange}
                      placeholder="100 Silicon Way"
                      className="w-full bg-[#1C1C1C] border border-white/5 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-white/20 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-[#9D9D9D] block mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Austin"
                      className="w-full bg-[#1C1C1C] border border-white/5 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-white/20 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-[#9D9D9D] block mb-1">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      required
                      value={form.postalCode}
                      onChange={handleChange}
                      placeholder="78701"
                      className="w-full bg-[#1C1C1C] border border-white/5 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-white/20 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>2. Payment Method</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <label className="p-4 bg-[#1C1C1C] border border-white/10 rounded-full flex items-center justify-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={form.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <span className="text-xs font-mono text-white uppercase">Credit Card</span>
                  </label>

                  <label className="p-4 bg-[#1C1C1C] border border-white/5 rounded-full flex items-center justify-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="crypto"
                      checked={form.paymentMethod === 'crypto'}
                      onChange={handleChange}
                    />
                    <span className="text-xs font-mono text-white uppercase">Crypto / USDC</span>
                  </label>
                </div>
              </div>
            </Card>

            {/* Order Review & Complete Order */}
            <Card hoverEffect={false} className="lg:col-span-1 space-y-6 sticky top-28">
              <h3 className="text-lg font-light text-white tracking-tight uppercase border-b border-white/5 pb-4">
                Review Order
              </h3>

              <div className="space-y-3 max-h-48 overflow-y-auto pr-1 text-xs">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#9D9D9D] max-w-[70%] truncate">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-white font-mono">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs font-mono pt-2 border-t border-white/5">
                <div className="flex justify-between text-[#9D9D9D]">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#9D9D9D]">
                  <span>Tax (8%)</span>
                  <span className="text-white">${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#9D9D9D]">
                  <span>Shipping</span>
                  <span className="text-white">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-white pt-2 border-t border-white/5">
                  <span>Total</span>
                  <span>${grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                className="w-full"
                icon={Lock}
              >
                {isSubmitting ? 'Processing...' : 'Authorize Payment'}
              </Button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#9D9D9D] font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-BIT ENCRYPTED TELEMETRY</span>
              </div>
            </Card>
          </form>
        )}
      </div>
    </MainLayout>
  );
};

export default Checkout;

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { api } from '../services/api';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const local = localStorage.getItem('nexus_cart');
    return local ? JSON.parse(local) : [];
  });
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('nexus_cart', JSON.stringify(cart));
    api.updateCart(cart);
  }, [cart]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const next = [...prevCart];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prevCart, { ...product, quantity }];
    });
    showToast(`Added "${product.name}" to cart`);
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast('Item removed from cart');
  };

  const clearCart = () => {
    setCart([]);
    showToast('Cart cleared');
  };

  const addCustomBuildToCart = (buildParts, totalPrice) => {
    const rigId = `custom-rig-${Date.now()}`;
    const partNames = Object.values(buildParts)
      .filter(Boolean)
      .map((p) => p.name)
      .join(', ');

    const customRigItem = {
      id: rigId,
      name: 'Custom System Blueprint',
      price: totalPrice,
      quantity: 1,
      category: 'Custom Rig',
      badge: 'BUILD',
      specs: { components: partNames },
    };

    setCart((prevCart) => [...prevCart, customRigItem]);
    showToast('Custom rig added to cart');
  };

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );
  const tax = useMemo(() => Math.round(subtotal * 0.08), [subtotal]);
  const shipping = useMemo(() => (subtotal > 500 || subtotal === 0 ? 0 : 25), [subtotal]);
  const grandTotal = useMemo(() => subtotal + tax + shipping, [subtotal, tax, shipping]);
  const totalItems = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        addCustomBuildToCart,
        subtotal,
        tax,
        shipping,
        grandTotal,
        totalItems,
        toastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
};

export default CartContext;

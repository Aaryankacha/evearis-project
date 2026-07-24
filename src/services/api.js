import { INITIAL_PRODUCTS } from '../data/mockProducts.js';

const API_BASE = '/api';

export const api = {
  // Products
  async getProducts(params = {}) {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE}/products${query ? `?${query}` : ''}`);
      if (!res.ok) throw new Error('Failed to fetch products');
      return await res.json();
    } catch {
      let filtered = [...INITIAL_PRODUCTS];
      if (params.category && params.category !== 'All Products') {
        filtered = filtered.filter((p) => p.category === params.category);
      }
      if (params.search) {
        const q = params.search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.description && p.description.toLowerCase().includes(q))
        );
      }
      return filtered;
    }
  },

  async getProductById(id) {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`);
      if (!res.ok) throw new Error('Product not found');
      return await res.json();
    } catch {
      return INITIAL_PRODUCTS.find((p) => String(p.id) === String(id)) || null;
    }
  },

  // Cart
  async getCart(sessionId = 'default_session') {
    try {
      const res = await fetch(`${API_BASE}/cart`, {
        headers: { 'x-session-id': sessionId },
      });
      if (!res.ok) throw new Error('Cart fetch failed');
      return await res.json();
    } catch {
      const stored = localStorage.getItem('nexus_cart');
      return { sessionId, items: stored ? JSON.parse(stored) : [] };
    }
  },

  async updateCart(items, sessionId = 'default_session') {
    try {
      const res = await fetch(`${API_BASE}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-session-id': sessionId,
        },
        body: JSON.stringify({ items }),
      });
      if (!res.ok) throw new Error('Cart update failed');
      return await res.json();
    } catch {
      localStorage.setItem('nexus_cart', JSON.stringify(items));
      return { sessionId, items };
    }
  },

  // Orders
  async createOrder(orderData) {
    try {
      const res = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      if (!res.ok) throw new Error('Order creation failed');
      return await res.json();
    } catch {
      const newOrder = {
        orderId: `NX-${Math.floor(100000 + Math.random() * 900000)}`,
        ...orderData,
        createdAt: new Date().toISOString(),
      };
      const existing = JSON.parse(localStorage.getItem('nexus_orders') || '[]');
      existing.unshift(newOrder);
      localStorage.setItem('nexus_orders', JSON.stringify(existing));
      return newOrder;
    }
  },

  // Builder Calculation
  async calculateBuild(build) {
    let totalPower = 0;
    let totalPrice = 0;

    Object.values(build).forEach((part) => {
      if (part) {
        if (part.power) totalPower += part.power;
        if (part.price) totalPrice += part.price;
      }
    });

    const recommendedPsuWatts = Math.max(500, Math.ceil((totalPower + 120) / 50) * 50);

    return {
      totalPower,
      totalPrice,
      recommendedPsuWatts,
      isCompatible: true,
      issues: [],
      warnings: totalPower > 700 ? [{ message: 'High wattage configuration. Ensure 850W+ PSU.' }] : [],
    };
  },
};

export default api;

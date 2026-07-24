import { Cart } from '../models/Cart.js';

let inMemoryCarts = {};

export const getCart = async (req, res) => {
  const sessionId = req.headers['x-session-id'] || 'default_session';
  try {
    let cart = await Cart.findOne({ sessionId });
    if (!cart) {
      cart = inMemoryCarts[sessionId] || { sessionId, items: [] };
    }
    return res.json(cart);
  } catch {
    return res.json(inMemoryCarts[sessionId] || { sessionId, items: [] });
  }
};

export const updateCart = async (req, res) => {
  const sessionId = req.headers['x-session-id'] || 'default_session';
  const { items } = req.body;
  try {
    let cart = await Cart.findOneAndUpdate(
      { sessionId },
      { items, updatedAt: Date.now() },
      { upsert: true, new: true }
    );
    return res.json(cart);
  } catch {
    inMemoryCarts[sessionId] = { sessionId, items };
    return res.json(inMemoryCarts[sessionId]);
  }
};

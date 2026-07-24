import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  badge: { type: String }
});

const cartSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  items: [cartItemSchema],
  updatedAt: { type: Date, default: Date.now }
});

export const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

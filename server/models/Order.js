import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  customer: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  items: [{ type: Object }],
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  shipping: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: 'CONFIRMED' }
}, { timestamps: true });

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

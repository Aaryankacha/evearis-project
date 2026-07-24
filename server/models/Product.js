import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  badge: { type: String },
  variant: { type: String },
  tagline: { type: String },
  description: { type: String },
  stock: { type: Number, default: 20 },
  power: { type: Number, default: 0 },
  compatibility: { type: Object },
  specs: { type: Object },
  performance: { type: Object },
  features: [{ type: String }]
}, { timestamps: true });

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

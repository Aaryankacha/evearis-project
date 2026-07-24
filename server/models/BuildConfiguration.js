import mongoose from 'mongoose';

const buildSchema = new mongoose.Schema({
  buildId: { type: String, required: true, unique: true },
  cpu: { type: Object },
  motherboard: { type: Object },
  gpu: { type: Object },
  ram: { type: Object },
  ssd: { type: Object },
  psu: { type: Object },
  cooling: { type: Object },
  case: { type: Object },
  totalPrice: { type: Number, required: true },
  totalPower: { type: Number, required: true },
  isCompatible: { type: Boolean, default: true }
}, { timestamps: true });

export const BuildConfiguration = mongoose.models.BuildConfiguration || mongoose.model('BuildConfiguration', buildSchema);

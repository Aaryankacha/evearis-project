import { connectDB } from '../config/db.js';
import { Product } from '../models/Product.js';
import { INITIAL_PRODUCTS } from '../../src/data/mockProducts.js';

export const seedDatabase = async () => {
  const isConnected = await connectDB();
  if (!isConnected) {
    console.log('[SEED] Skipping MongoDB seed due to offline database.');
    return;
  }

  try {
    await Product.deleteMany({});
    await Product.insertMany(INITIAL_PRODUCTS);
    console.log('[SEED] Successfully seeded database with NEXUS CORE products.');
  } catch (error) {
    console.error('[SEED ERROR]', error);
  }
};

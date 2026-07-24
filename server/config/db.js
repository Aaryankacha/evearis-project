import mongoose from 'mongoose';

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/nexuscore';
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 2000
    });
    console.log(`[NEXUS SERVER] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[NEXUS SERVER] Local MongoDB not detected at ${MONGO_URI}. Falling back to in-memory dataset mode.`);
    return false;
  }
};

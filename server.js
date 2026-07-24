import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

import { connectDB } from './server/config/db.js';
import { seedDatabase } from './server/seed/seed.js';
import productRoutes from './server/routes/productRoutes.js';
import cartRoutes from './server/routes/cartRoutes.js';
import orderRoutes from './server/routes/orderRoutes.js';
import builderRoutes from './server/routes/builderRoutes.js';
import { errorHandler } from './server/middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Connect & seed MongoDB if local daemon available
  await connectDB();
  await seedDatabase();

  // API Routes
  app.get('/api/health', (req, res) => res.json({ status: 'ok', brand: 'NEXUS CORE' }));
  app.use('/api/products', productRoutes);
  app.use('/api/cart', cartRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/builder', builderRoutes);

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Error Handler
  app.use(errorHandler);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[NEXUS CORE] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

import express from 'express';
import { calculateBuild } from '../controllers/builderController.js';

const router = express.Router();

router.post('/calculate', calculateBuild);

export default router;

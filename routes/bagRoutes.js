// routes/bagRoutes.js
import { Router } from 'express';
import { getBagByIdQuery } from '../controllers/bagController.js';

const router = Router();

router.get('/bags', getBagByIdQuery);

export default router;  


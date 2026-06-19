import express from 'express';
import { testAI } from '../controllers/ai.controller.js';

const aiRouter = express.Router();

aiRouter.get('/test',testAI);

export default aiRouter;
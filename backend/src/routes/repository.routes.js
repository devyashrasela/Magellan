import express from 'express';
import { analyseRepo } from '../controllers/repository.controller.js';

const repoRouter = express.Router();

repoRouter.post('/analyse',analyseRepo);

export default repoRouter;
import express from 'express';
import { 
    analyseRepo,
    getRepoReadme
} from '../controllers/repository.controller.js';

const repoRouter = express.Router();

repoRouter.post('/analyse',analyseRepo);
repoRouter.get('/readme',getRepoReadme);

export default repoRouter;
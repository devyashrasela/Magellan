import express from 'express';
import { 
    analyseRepo,
    getRepoReadme,
    getRepoTree,
    getFileContent
} from '../controllers/repository.controller.js';

const repoRouter = express.Router();

repoRouter.post('/analyse',analyseRepo);
repoRouter.get('/readme',getRepoReadme);
repoRouter.get('/repotree',getRepoTree);
repoRouter.get('/fileContent',getFileContent);


export default repoRouter;
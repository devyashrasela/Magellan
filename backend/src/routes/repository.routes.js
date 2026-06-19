import express from 'express';
import { 
    getRepoMetadata,
    getRepoReadme,
    getRepoTree,
    getFileContent,
    analyzeRepository
} from '../controllers/repository.controller.js';

const repoRouter = express.Router();

repoRouter.post('/analyse',analyzeRepository);
repoRouter.get('/matadata',getRepoMetadata);
repoRouter.get('/readme',getRepoReadme);
repoRouter.get('/repotree',getRepoTree);
repoRouter.get('/fileContent',getFileContent);


export default repoRouter;
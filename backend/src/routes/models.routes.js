import express from "express"
import { getAvailableModels } from "../controllers/models.controller.js";

const modelsRouter = express.Router();

modelsRouter.get("/",getAvailableModels);

export default modelsRouter;
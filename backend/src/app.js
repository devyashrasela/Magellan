import express from 'express';
import repoRouter from './routes/repository.routes.js';
import aiRouter from './routes/ai.routes.js';

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message: "This app is working!"});
})

app.use("/api/repository",repoRouter);
app.use("/api/ai",aiRouter);

export default app;
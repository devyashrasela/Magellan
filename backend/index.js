import dotenv from 'dotenv';

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
    try{
        await connectDB();

        app.listen(port,()=>{
            console.log(`This app is listening on port: ${port}`);
        })
    }
    catch(err){
        console.log("error: ",error.message);
    }
};

startServer();
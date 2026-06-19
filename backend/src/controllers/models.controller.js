import Models from "../models/Models.js";

export const getAvailableModels = async (req,res) => {
    try{
        const models = await Models.find({
            active : true
        });
    
        res.json({
            success: true,
            models : models
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message : err.message
        });
    }
}
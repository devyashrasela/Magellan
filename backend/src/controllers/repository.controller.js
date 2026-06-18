import { extractRepositoryInfo,getRepository } from "../github/repository.js";

const analyseRepo = async (req,res) => {
    try{
        const repoUrl = req.body.url;
        const {owner,repo} = extractRepositoryInfo(repoUrl);
        const result = await getRepository(owner,repo);
        res.json({
            success:"true",
            data:result
        })
    }
    catch(error){
            res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}

export {
    analyseRepo
}
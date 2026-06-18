import { extractRepositoryInfo,getRepository } from "../github/repository.js";
import { getReadme } from "../github/readme.js";

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

const getRepoReadme = async (req,res) => {
    try {
        const repoUrl = req.body.url;
        const {owner,repo} = extractRepositoryInfo(repoUrl);
        const result = await getReadme(owner,repo);
        console.log(result);
        res.json({
            success:true,
            readme:result
        });
    }
    catch(err){
        console.log(error);
        res.status(500).json({
            success:false,
            message: "Something want wrong!"
        })
    }
}

export {
    analyseRepo,
    getRepoReadme
}
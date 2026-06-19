import { 
    extractRepositoryInfo,
    getRepository 
} from "../github/repository.js";
import { getReadme } from "../github/readme.js";
import { getRepositoryTree } from "../github/repotree.js";
import { fileContent } from "../github/fileContent.js";

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
        res.json({
            success:true,
            readme:result
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}

const getRepoTree = async (req,res) => {
    try{
        const repoUrl = req.body.url;
        const {owner,repo} = extractRepositoryInfo(repoUrl);
        const result = await getRepositoryTree(owner,repo);
        res.json({
            success:true,
            tree:result
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}

const getFileContent = async (req,res) => {
    try{
        const repoUrl = req.body.url;
        const {owner,repo} = extractRepositoryInfo(repoUrl);
        const path = req.body.path;
        const result = await fileContent(
            owner,
            repo,
            path
        )
        res.json({
            success : "true",
            fileContent : result
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}

export {
    analyseRepo,
    getRepoReadme,
    getRepoTree,
    getFileContent
}
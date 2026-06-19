import { extractRepositoryInfo } from "../utils/github.util.js";
import { getRepository } from "../github/repository.js";
import { getReadme } from "../github/readme.js";
import { getRepositoryTree } from "../github/repotree.js";
import { fileContent } from "../github/fileContent.js";
import { generateRepositorySummary } from "../analysis/repoSummary.js"

export const getRepoMetadata = async (req, res) => {
    try {
        const repoUrl = req.body.url;
        const { owner, repo } = extractRepositoryInfo(repoUrl);
        const result = await getRepository(owner, repo);
        res.json({
            success: "true",
            data: result
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const getRepoReadme = async (req, res) => {
    try {
        const repoUrl = req.body.url;
        const { owner, repo } = extractRepositoryInfo(repoUrl);
        const result = await getReadme(owner, repo);
        res.json({
            success: true,
            readme: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const getRepoTree = async (req, res) => {
    try {
        const repoUrl = req.body.url;
        const { owner, repo } = extractRepositoryInfo(repoUrl);
        const result = await getRepositoryTree(owner, repo);
        res.json({
            success: true,
            tree: result
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const getFileContent = async (req, res) => {
    try {
        const repoUrl = req.body.url;
        const { owner, repo } = extractRepositoryInfo(repoUrl);
        const path = req.body.path;
        const result = await fileContent(
            owner,
            repo,
            path
        )
        res.json({
            success: "true",
            fileContent: result
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const analyzeRepository =
    async (req, res) => {

        try {
            const repoUrl = req.body.url;

            const { owner, repo } = extractRepositoryInfo(repoUrl);

            const metadata = await getRepository(owner, repo);

            const readme = await getReadme(owner, repo);

            const tree = await getRepositoryTree(owner, repo);

            const summary = await generateRepositorySummary({ metadata, readme, tree });

            return res.json({
                success: true,
                summary
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    };

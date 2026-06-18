import octokit from "./githubClient.js";

const extractRepositoryInfo = (githubUrl) => {
    try {
        const url = new URL(githubUrl);

        const parts = url.pathname
            .split("/")
            .filter(Boolean);

        if (parts.length < 2) {
            throw new Error("Invalid GitHub repository URL");
        }

        let owner = parts[0];
        let repo = parts[1];

        repo = repo.replace(".git", "");

        return {
            owner,
            repo,
        };
    } catch (error) {
        throw new Error("Invalid GitHub URL");
    }
};

const getRepository = async (owner, repo) => {
    const response = await octokit.rest.repos.get({
        owner,
        repo,
    });
    console.log(response);
    return response.data;
};

export {
    extractRepositoryInfo,
    getRepository
}


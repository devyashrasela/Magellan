import octokit from "./githubClient.js";

export const getRepository = async (owner, repo) => {
    const response = await octokit.rest.repos.get({
        owner,
        repo,
    });
    return response.data;
};


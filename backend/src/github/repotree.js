import octokit from "./githubClient.js";

const getRepositoryTree = async (
    owner,
    repo,
    branch = "main"
) => {

    const response =
        await octokit.rest.git.getTree({
            owner,
            repo,
            tree_sha: branch,
            recursive: "true",
        });

    return response.data.tree;
};

export {
    getRepositoryTree
}
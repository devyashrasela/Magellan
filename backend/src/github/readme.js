import octokit from "./githubClient.js";

const getReadme = async (owner, repo) => {
    const response =
        await octokit.rest.repos.getReadme({
            owner,
            repo,
        });

    return Buffer.from(
        response.data.content,
        "base64"
    ).toString("utf8");
};

export {
    getReadme
}
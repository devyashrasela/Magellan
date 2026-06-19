import octokit from "./githubClient.js";

const fileContent = async (
    owner,
    repo,
    path
) => {

    const response =
        await octokit.rest.repos.getContent({
            owner,
            repo,
            path,
        });

    return Buffer.from(
        response.data.content,
        "base64"
    ).toString("utf8");
};

export {
    fileContent
}
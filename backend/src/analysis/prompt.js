export const createRepositoryPrompt = ({ metadata, readme, tree }) => {
    return `
        You are a senior software architect.
        Analyze the following GitHub repository.
        Repository Name:${metadata.name}
        Description:${metadata.description}
        README:${readme}
        Repository Structure:${tree
            .slice(0, 100)
            .map(item => item.path)
            .join("\n")}

        Generate:
            1. Project Overview
            2. Purpose
            3. Tech Stack
            4. Main Features
            5. Architecture
            6. Folder Structure Explanation
            7. Learning Path For Beginners

        Format the response in markdown.
    `;
};
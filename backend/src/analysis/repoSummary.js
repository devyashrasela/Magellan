import { generateResponse } from "../ai/generate.js";
import { createRepositoryPrompt } from "./prompt.js";

export const generateRepositorySummary =
    async ({
        metadata,
        readme,
        tree
    }) => {

        const prompt =
            createRepositoryPrompt({
                metadata,
                readme,
                tree
            });

        const summary =
            await generateResponse({
                provider: "gemini",
                model: "gemini-2.5-flash",
                // model: "gemini-3.1-flash-lite",
                prompt
            });

        return summary;
    };
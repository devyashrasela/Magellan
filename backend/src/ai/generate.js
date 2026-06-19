import { generateText } from "ai";
import { getModel } from "./modelFactory.js";

export const generateResponse = async ({
    provider,
    model,
    prompt
}) => {

    const selectedModel =
        getModel(provider, model);

    const { text } =
        await generateText({
            model: selectedModel,
            prompt
        });

    return text;
};
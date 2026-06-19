import { getGoogleModel } from "./providers/google.js";
import { getGroqModel } from "./providers/groq.js";

export const getModel = (
    provider,
    model
) => {

    switch(provider){

        case "gemini":
            return getGoogleModel(model);

        case "groq":
            return getGroqModel(model);

        default:
            throw new Error(
                "Unsupported provider"
            );
    }
};
import { getGoogleModel } from "./providers/google.js";

export const getModel = (
    provider,
    model
) => {

    switch(provider){

        case "gemini":
            return getGoogleModel(model);

        default:
            throw new Error(
                "Unsupported provider"
            );
    }
};
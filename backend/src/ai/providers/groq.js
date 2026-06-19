import { groq } from "@ai-sdk/groq";

export const getGroqModel = (
    model = "llama-3.3-70b-versatile"
) => {
    return groq(model);
};


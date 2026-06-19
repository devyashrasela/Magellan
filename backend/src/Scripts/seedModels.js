import Models from "../models/Models.js";

const models = [

    {
        provider: "google",
        modelId: "gemini-2.5-flash",
        displayName: "Gemini 2.5 Flash"
    },

    {
        provider: "google",
        modelId: "gemini-2.5-pro",
        displayName: "Gemini 2.5 Pro"
    },

    {
        provider: "groq",
        modelId: "llama-3.3-70b-versatile",
        displayName: "Llama 3.3 70B"
    },

    {
        provider: "groq",
        modelId: "deepseek-r1-distill-llama-70b",
        displayName: "DeepSeek R1 Distill"
    }

];

export const seedModel = async () => {
    await Models.insertMany(models);
    console.log("Models Seeded");
}


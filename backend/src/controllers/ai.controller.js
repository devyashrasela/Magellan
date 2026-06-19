import { generateResponse }
from "../ai/generate.js";

export const testAI = async ( req, res ) => {
    const result =
        await generateResponse({
            provider: "gemini",
            model: "gemini-2.5-flash",
            prompt: "Say hello to Magellan"
        });

    res.json({
        success: true,
        result
    });
};
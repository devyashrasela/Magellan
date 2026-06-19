import { generateResponse }
    from "../ai/generate.js";

export const testAI = async (req, res) => {
    const result =
        await generateResponse({
            // provider: "gemini",
            // model: "gemini-2.5-flash",
            // prompt: "Say hello to Magellan"
            provider: "groq",
            model: "llama-3.3-70b-versatile",
            prompt: "Say hello"
        });

    res.json({
        success: true,
        result
    });
};
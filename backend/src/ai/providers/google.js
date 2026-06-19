import { google } from '@ai-sdk/google';

// Get google model function
export const getGoogleModel = (
    model = "gemini-2.5-flash"
) => {
    return google(model);
};
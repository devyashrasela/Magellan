import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
    {
        provider: {
            type: String,
            required: true
        },

        modelId: {
            type: String,
            required: true,
            unique: true
        },

        displayName: {
            type: String,
            required: true
        },

        active: {
            type: Boolean,
            default: true
        },

        supportsVision: {
            type: Boolean,
            default: false
        },

        supportsReasoning: {
            type: Boolean,
            default: false
        },

        maxTokens: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const Models = mongoose.model(
    "Model",
    modelSchema
);

export default Models;
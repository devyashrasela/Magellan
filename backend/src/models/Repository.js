import mongoose from "mongoose"

const repoSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        owner: {
            type: String,
            required: true,
        },
        repoName: {
            type: String,
            required: true,
        },
        githubUrl: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["PENDING", "ANALYZED", "FAILED"],
            default: "PENDING",
        },
    },
    {
        timestamps: true,
    }
);

const Repository = mongoose.Model("Repository", repoSchema);
export default Repository;
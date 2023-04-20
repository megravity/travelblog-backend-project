import { Schema, model } from "mongoose";

const commentSchema = new Schema(
    {
        comment: {
            type: String,
            required: true,
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },

    { timestamps: true }
);

const CommentCollection = model("Comment", commentSchema);

export default CommentCollection;

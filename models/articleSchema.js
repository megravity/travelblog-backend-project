import { Schema, model } from "mongoose";

const articleSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },

    ]

  
    
},

{timestamps: true},

);

const ArticleCollection = model("Article", articleSchema);

export default ArticleCollection;
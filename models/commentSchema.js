const commentSchema = new Schema({

    comment: {
        type: String,
        required: true,
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }

    
},
  {timestamps: true},

);

const CommentCollection = model("Comment", commentSchema);

export default CommentCollection;
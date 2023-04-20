import CommentCollection from "../models/commentSchema.js";
import ArticleCollection from "../models/articleSchema.js";

export const getAllComments = async (req, res) => {
    try {
        const comments = await CommentCollection.find();
        if (comments) {
            res.json({ success: true, data: comments });
        }
    } catch (err) {
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({
            success: false,
            message: err.message,
        });
    }
};

export const getCommentsById = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await CommentCollection.findById(id);

        if (comments) {
            res.json({ success: true, data: comments });
        }
    } catch (err) {
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({
            success: false,
            message: err.message,
        });
    }
};

export const createComment = async (req, res) => {
    try {
        const { articleId } = req.params;
        const { content } = req.body;
        const { _id } = req.user;
        const createdComment = await CommentCollection.create({
            content,
            user: _id,
        });
        if (createdComment) {
            const article = await ArticleCollection.findById(articleId);
            article.comments.push(createdComment);
            article.save();
            res.json({ success: true, data: createdComment });
        }
    } catch (err) {
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({
            success: false,
            message: err.message,
        });
    }
};

export const addReplyComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content, comments } = req.body;
        const { _id } = req.user;
        const createdComment = await CommentCollection.create({
            content,
            comments,
            user: _id,
        });

        if (createdComment) {
            const comment = await CommentCollection.findById(commentId);
            if(comment.comments) {
                comment.comments.push(createdComment);
            } else {
                comment.comments = [createdComment];
            }
            comment.save();
            res.json({ success: true, data: comment });
        }
    } catch (err) {
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({
            success: false,
            message: err.message,
        });
    }
}

export const updateCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedComment = await CommentCollection.findByIdAndUpdate(
            id,
            req.body
        );
        if (updatedComment) {
            res.json({ success: true, data: updatedComment });
        }
    } catch (err) {
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({
            success: false,
            message: err.message,
        });
    }
};

export const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const removedComment = await CommentCollection.findByIdAndRemove(id);
        if (removedComment) {
            res.json({ success: true, data: removedComment });
        }
    } catch (err) {
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({
            success: false,
            message: err.message,
        });
    }
};

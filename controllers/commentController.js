import CommentCollection from "../models/commentSchema.js";
import ArticleCollection from "../models/articleSchema.js";

export const getCommentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const comments = await CommentCollection.findAll({ user: userId });
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
    const comment = await CommentCollection.create(req.body);
    if (comment) {
      const article = await ArticleCollection.findById(articleId);
      article.comments.push(comment);
      article.save();
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
};

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
    const removedComment = CommentCollection.findByIdAndRemove(id);
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

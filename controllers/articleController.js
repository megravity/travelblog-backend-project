import ArticleCollection from "../models/articleSchema.js";

export const getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleCollection.find().populate("comments");
        if (articles) {
            res.json({ success: true, data: articles });
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

export const getArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await ArticleCollection.findById(id);
        if (article) {
            res.json({ success: true, data: article });
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

export const createArticle = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const article = await ArticleCollection.create({
            title,
            content,
            author,
        });
        if (article) {
            res.json({ success: true, data: article });
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

export const updateArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedArticle = await ArticleCollection.findByIdAndUpdate(
            id,
            req.body
        );
        if (updatedArticle) {
            res.json({
                success: true,
                data: updatedArticle,
            });
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

export const deleteArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedArticle = ArticleCollection.findByIdAndRemove(id);
        if (deletedArticle) {
            res.json({ success: true, data: deletedArticle });
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

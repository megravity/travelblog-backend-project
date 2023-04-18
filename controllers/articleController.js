import ArticleCollection from "../models/articleSchema.js";

const getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleCollection.find();
        res.send({ success: true, data: articles });
    } catch (err) {
        if (err.status) {
            res.status(err.status).error(err.message);
        }
    }
};

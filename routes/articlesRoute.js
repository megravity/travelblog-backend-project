import express from "express";
import {
    getAllArticles,
    createArticle,
    getArticleById,
    updateArticleById,
    deleteArticleById,
} from "../controllers/articleController.js";
import auth from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/isAdmin.js";
const router = express.Router();

// /articles
//GET to get all articles
router.get("/", getAllArticles);

//POST to add new article
router.post("/", auth, isAdmin, createArticle);

//GET to get a single article
router.get("/:id", getArticleById);

//PATCH to update a single article
router.patch("/:id", auth, isAdmin, updateArticleById);

//DELETE to delete a single article
router.delete("/:id", auth, isAdmin, deleteArticleById);

export default router;

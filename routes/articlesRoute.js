import express from "express";
import {
  getAllArticles,
  createArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
} from "../controllers/articleController.js";
const router = express.Router();

// /articles
//GET to get all articles
router.get("/", getAllArticles);

//POST to add new article
router.post("/", createArticle);

//GET to get a single article
router.get("/:id", getArticleById);

//PATCH to update a single article
router.patch("/:id", updateArticleById);

//DELETE to delete a single article
router.delete("/:id", deleteArticleById);

export default router;

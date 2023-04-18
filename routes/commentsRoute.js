import express from "express";
import {
  getCommentsByUserId,
  createComment,
  updateCommentById,
  deleteCommentById,
} from "../controllers/commentController.js";

import auth from "../middlewares/auth.js"

const router = express.Router();

//GET to get a single comment
router.get("/:id", getCommentsByUserId);

//POST to add new comment
router.post("/:articleId",auth, createComment);

//PATCH to update a single comment
router.patch("/:id", updateCommentById);

//DELETE to delete a single comment
router.delete("/:id", auth, deleteCommentById);

export default router;

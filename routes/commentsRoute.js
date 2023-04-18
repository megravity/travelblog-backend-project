import express from "express";
import {
  getCommentsByUserId,
  createComment,
  updateCommentById,
  deleteCommentById,
} from "../controllers/commentController.js";
const router = express.Router();

//GET to get a single comment
router.get("/:id", getCommentsByUserId);

//POST to add new comment
router.post("/", createComment);

//PATCH to update a single comment
router.patch("/:id", updateCommentById);

//DELETE to delete a single comment
router.delete("/:id", deleteCommentById);

export default router;

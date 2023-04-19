import express from "express";
import {
  getAllComments,
  getCommentsById,
  createComment,
  updateCommentById,
  deleteCommentById,
  
} from "../controllers/commentController.js";

import auth from "../middlewares/auth.js";

const router = express.Router();

//Get all comments
router.get("/", getAllComments);

//GET to get a single comment
router.get("/:id", getCommentsById);

//POST to add new comment
router.post("/:articleId", auth, createComment);

//PATCH to update a single comment
router.patch("/:id", updateCommentById);

//DELETE to delete a single comment
router.delete("/:id",auth, deleteCommentById);

export default router;

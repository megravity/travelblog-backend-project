import express from "express";
import {
    getAllComments,
    getCommentsById,
    createComment,
    updateCommentById,
    deleteCommentById,
    addReplyComment,
} from "../controllers/commentController.js";

import auth from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

//Get all comments
router.get("/", getAllComments);

//GET to get a single comment
router.get("/:id", getCommentsById);

//POST to add new comment
router.post("/:articleId", auth, createComment);

//POST to reply to comment
router.post("/reply/:commentId", auth, addReplyComment);

//PATCH to update a single comment
router.patch("/:id", auth, isAdmin, updateCommentById);

//DELETE to delete a single comment
router.delete("/:id", auth, isAdmin, deleteCommentById);

export default router;

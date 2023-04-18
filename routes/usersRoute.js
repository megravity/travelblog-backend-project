import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";
const router = express.Router();

// /users
//GET to get all users
router.get("/", getAllUsers);

//POST to add new user
router.post("/", createUser);

//GET to get a single user
router.get("/:id", getUserById);

//PATCH to update a single user
router.patch("/:id", updateUserById);

//DELETE to delete a single user
router.delete("/:id", deleteUserById);

export default router;

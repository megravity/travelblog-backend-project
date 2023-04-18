import UserCollection from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {

        console.log(req.body)
        const user = await UserCollection.create(req.body);
        bcrypt.hash(user.password, 10).then(async (hash) => {
            user.password = hash;
            await user.save();
        });
        if (user) {
            res.json({ success: true, data: user });
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

// export const getAllUsers = async (req, res) => {};
// export const getUserById = async (req, res) => {};
// export const createUser = async (req, res) => {};
// export const updateUserById = async (req, res) => {};
// export const deleteUserById = async (req, res) => {};

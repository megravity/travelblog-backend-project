import UserCollection from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserCollection.findOne({ email });

    if (user) {
      const verifyPassword = bcrypt.compareSync(password, user.password);

      if (verifyPassword) {
        const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.SIGNATURE,
          {
            expiresIn: "1h",
            issuer: "backendTeam",
            audience: "travel-blog-users",
          }
        );
        res.header("token", token).json({ success: true, data: user });
        // req.user = user;
      } else {
        res.status(403).json({
          success: false,
          data: "unauthorized password",
        });
      }
    } else {
      res.status(403).json({
        success: false,
        data: "unauthorized user",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, data: error.message });
  }

 
};

// export const getAllUsers = async (req, res) => {};
// export const getUserById = async (req, res) => {};
// export const createUser = async (req, res) => {};
// export const updateUserById = async (req, res) => {};
// export const deleteUserById = async (req, res) => {};

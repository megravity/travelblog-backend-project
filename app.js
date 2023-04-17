import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Successfully connected to DB 🦖");
        app.listen(PORT, () => {
            console.log(`Server is listening on http://localhost:${PORT} 🐶`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
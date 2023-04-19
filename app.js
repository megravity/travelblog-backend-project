import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import articlesRoute from "./routes/articlesRoute.js";
import usersRoute from "./routes/usersRoute.js";
import commentsRoute from "./routes/commentsRoute.js";
import expressOasGenerator from "express-oas-generator";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

mongoose.set("strictQuery", false);
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

expressOasGenerator.init(app, {});

// routes
app.use("/articles", articlesRoute);
app.use("/users", usersRoute);
app.use("/comments", commentsRoute);

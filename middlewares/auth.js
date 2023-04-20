import jwt from "jsonwebtoken";

import UserCollection from "../models/userSchema.js";

 const auth = async (req, res, next) => {

    try{
        const token = req.headers.token;

        const payload = jwt.verify(token, process.env.SIGNATURE);

        const user = await UserCollection.findById(payload.id);

        if(!user) {
            return res.status(401).json({success: false, data: "unauthorized"});
        }

        req.user = user;
        next()

    }catch (error) {

        res.json({success: false, data: error.message})
    }
}

export default auth;



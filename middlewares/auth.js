// import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserCollection from '../models/userSchema.js';



const auth = async(req, res, next) => {

    try {

        const {email, password} = req.body;

        const user = await UserCollection.findOne({email});

        if(user) {

            const verify = bcrypt.compareSync (password, user.password);


            if (verify) {

                next ()

            }else {

                res.status(403).json({success: false, data: "unauthorized user"})
            }


        }

    }catch(error) {

        res.status(500).json({success: false, data: error.message})

    }
}

 
export default auth





















// import UserCollection from '../models/userSchema.js';

// export const auth = async (req, res, next) => {

//     try{
//         const token = req.header.token;

//         const payload = jwt.verify(token, process.env.SIGNATURE);

//         const user = await UserCollection.findById(payload.id);

//         if(!user) {
//             return res.status(401).json({success: false, data: "unauthorized"});
//         }

//         req.user = user;

//     }catch (error) {

//         res.json({success: false, data: error.message})
//     }
// }



import {body, validationResult} from 'express-validator';

const rules = [

    body("email").isEmail().withMessage("please enter a valid email address").normalizeEmail(),
    body("password").isString().withMessage("password is not valid").trim().isLength({min: 6}).withMessage("password must be at least 6 characters long"),

    (req, res, next) => {

        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({success: false, data: errors.array().map((error => (

                {

                [error.param]: error.msg
            })
            
            ))});

        } else {

            next(req);

        }
            

    }
        


]
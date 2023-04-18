import {body, validationResult} from 'express-validator';

const rules = [

    body("email").isEmail().withMessage("please enter a valid email address").normalizeEmail()


]
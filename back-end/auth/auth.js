const{
    check,
    validationResult
}=require('express-validator');

validationSignUpRequest=[
    check('firstName').notEmpty().withMessage("First name is required"),
    check('lastName').notEmpty().withMessage("Last name is required"),
    check('email').notEmpty().withMessage("Email is required"),
    check('password').isLength({
        min:6
    }).withMessage("Password is required"),
]
validationSignInRequest=[
    check('email').notEmpty().withMessage("Email is required"),
    check('password').isLength({
        min:6
    }).withMessage("Password is required"),
]
isRequestCorrect = (req, res, next) => {
    const errors = validationResult(req);
    // console.log(errors)
    if (errors.array().length > 0) {
        
        return res.status(400).json({
            success: false,
            message: "Invalid Request",
            errors: errors.array()[0].msg
        })
    }
    next();
}

module.exports ={
    validationSignUpRequest,
    isRequestCorrect,
    validationSignInRequest
}
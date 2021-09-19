const express = require('express');
const router = express.Router();
const{
    isRequestCorrect,
    validationSignUpRequest,
    validationSignInRequest
}=require('../../../auth/auth')
const{
    signUp,
    signIn
}= require('../../../controller/user-controller/user.controller.js')

router.post('/signup',validationSignUpRequest,isRequestCorrect,signUp);
router.post('/signin',validationSignInRequest,isRequestCorrect,signIn);

module.exports= router;
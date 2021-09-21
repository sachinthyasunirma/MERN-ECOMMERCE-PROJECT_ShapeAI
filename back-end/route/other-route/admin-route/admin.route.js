const express =require('express');
const router = express.Router();
const{
    signUp,
    signIn
}=require('../../../controller/admin-controller/admin.controller');

//admin

router.post("/signup",signUp);
router.post('/signin',signIn);
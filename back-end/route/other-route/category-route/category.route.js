const express = require('express');
const router = express.Router();

const{
    addCategory,
    getCategory
}=require('../../../controller/category-controller/category.controller');

const{
    validationCategoryRequest,
    isRequestCorrect
}=require('../../../middleware/auth');
//Route
router.post("/addcategory",validationCategoryRequest,isRequestCorrect, addCategory);
router.get("/getcategory", getCategory);


module.exports = router;
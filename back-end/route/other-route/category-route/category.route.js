const express = require('express');
const router = express.Router();

const{
    addCategory,
    getCategory
}=require('../../../controller/category-controller/category.controller');


//Route
router.post("/addcategory", addCategory);
router.get("/getcategory", getCategory);


module.exports = router;
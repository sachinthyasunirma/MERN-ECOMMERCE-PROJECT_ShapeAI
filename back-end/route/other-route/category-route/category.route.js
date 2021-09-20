const express = require('express');
const router = express.Router();

const{
    addCategory,
    getCategory
}=require('../../../controller/category-controller/category.controller');


//Route
router.post("/addCategory", addCategory);
router.get("/getCategory", getCategory);


module.exports = router;
const express = require('express');
const router = express.Router();

const{
    addCategory,
}=require('../../../controller/category-controller/category.controller');


//Route
router.post("/addCategory", addCategory);


module.exports = router;
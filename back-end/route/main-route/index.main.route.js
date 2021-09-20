const express = require('express');
const router = express.Router();

//user-route
const userRoute = require('../other-route/user-route/user.route');
router.use("/user", userRoute);

//category-route
const categoryRoute = require('../other-route/category-route/category.route');
router.use("/category");


//exports
module.exports = router;
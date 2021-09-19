const express = require('express');
const router = express.Router();

//user-route
const userRoute = require('../other-route/user-route/user.route');
router.use("/user", userRoute);


module.exports = router;
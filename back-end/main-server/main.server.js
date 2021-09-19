const express = require('express');
const env = require('dotenv');
//init env
env.config();
//import db
// const db = require('../database/db.connection');
//init express
const app = express();

//send by json format
app.use(express.json());



//route
const mainRoute = require('../route/main-route/index.main.route')
app.use("/api", mainRoute)

//init server 
app.listen(process.env.PORT,()=>{
    console.log(`Serevr is up and running http//:${process.env.PORT}`);
})
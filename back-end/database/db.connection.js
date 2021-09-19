const mongoose = require("mongoose");

const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);
const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${password}@cluster0.az664.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority
`;

mongoose.connect(url,{
    //connection option
    useNewUrlParser: true,
    useUnifiedTopology:true
})

//connect with mongoDB
const dbConn = mongoose.connection;

//error handle
dbConn.on("error", console.log.bind(console, "connection error"))
dbConn.on("open", function(){
    console.log("DB connection successful")
})

module.exports = dbConn;
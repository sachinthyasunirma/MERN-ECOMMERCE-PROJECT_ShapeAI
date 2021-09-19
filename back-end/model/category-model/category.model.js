const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, " Please provid your category name"],
        trim: true,
    },
    slug:{
        type: String,
        required: [true, " Please provid your category name"],
        trim: true,
        unique:true
    },
    type:{
        type:String
    },
    parentId:{
        type:String
    }
},{
    timestamps: true
})
module.exports = mongoose.model('Category', categorySchema);
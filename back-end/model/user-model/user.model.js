const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide your FirstName"],
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: [true, "Please provide your LastName"],
        trim: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        trim: true,
        unique: true,
        lowercase: true
    },
    userName: {
        type: String,
        required: [true, "Please provide your Username"],
        trim: true,
        unique: true,
        lowercase: true,
        index: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "user"
    },
    contact_number: {
        type: String
    },
    hash_password: {
        type: String,
        required: [true, "Please provide your Password"],
    }
},{
    timestamps : true
})
userSchema.virtual('password').set(function (password) {
    this.hash_password = bcrypt.hashSync(password, 8)
})

userSchema.virtual('fullname').get(function () {
    return this.firstname + ' ' + this.lastname;
}).set(function (fullname) {
    this.firstname = fullname.split(' ')[0];
    this.lastname = fullname.split(' ')[1];
})
userSchema.methods = {

    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password)
    }

}

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User;
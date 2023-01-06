const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema =new Schema ({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    blockStatus:{
        type:Boolean
    }
})
module.exports =   mongoose.models.User || mongoose.model('User',UserSchema)
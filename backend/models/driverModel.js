const mongoose = require('mongoose')
const Schema = mongoose.Schema
const DriverSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    LiscenceNo:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose .model('Driver',DriverSchema)
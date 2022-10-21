const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userID:{
        type:String,
        required:true
    },
    name:{
        type : String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    team:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)
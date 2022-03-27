const mongoose = require("mongoose")
const router = require("../routes/auth.routes")


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})




module.exports = mongoose.model("User", UserSchema)
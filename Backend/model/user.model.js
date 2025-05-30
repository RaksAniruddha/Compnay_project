import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
    },
    otp_code:{
        type:String,
    },
    is_verified:{
        type:Boolean,
        default:false
    }
})

export const User= mongoose.model("User",userSchema);
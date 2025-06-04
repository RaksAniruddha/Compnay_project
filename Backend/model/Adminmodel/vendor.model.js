import mongoose from "mongoose";

const vendorSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:["vendor","store_Manager"]
    },
    phoneNumber:{
        type:Number
    },
    gstInNumber:{
        type:String
    },
    adharCard:{
        type:String,
    }
},{timestamps:true});

export const Vendor=mongoose.model("Vendor",vendorSchema);
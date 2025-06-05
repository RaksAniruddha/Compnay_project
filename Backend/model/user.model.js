import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["vendor", "super_admin", "store_Manager", "buyer"],
        default: "buyer"
    },
    otp_code: {
        type: String,
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    profilePhoto: {
        type: String
    },
    defaultAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    phoneNumber: {
        type: Number,
    },
    gstInNumber: {
        type: String,
    },
    adharCard:{
        type:String
    },
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);
import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    primaryPhoneNumber: {
        type: Number,
        required: true
    },
    secondaryPhoneNumber: {
        type: Number
    },
    category: {
        type: String,
        enum: ["home", "office", "others"],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    }
},{timestamps:true})

export const Address = mongoose.model("Address", addressSchema);
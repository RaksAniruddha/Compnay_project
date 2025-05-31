import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    discount: {
        type:Number,
    },
    finalPrice: {
        type:Number,
    },
    // deleveryStatus:{
    //     type:String,
    //     enum:["none","confirmed","shipped","submitted","delivered"],
    //     default:"none"
    // }
});

export const Products = mongoose.model("Products", productSchema);
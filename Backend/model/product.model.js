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
    caterogyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true
    },
    stock:{
        type:Number,
    },
    discount: {
        type:Number,
    },
    finalPrice: {
        type:Number,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    // deleveryStatus:{
    //     type:String,
    //     enum:["none","confirmed","shipped","submitted","delivered"],
    //     default:"none"
    // }
},{timestamps:true});

export const Products = mongoose.model("Products", productSchema);
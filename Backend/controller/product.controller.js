import { Products } from "../model/product.model";
import { uploadImage } from "../utills/cloudinary.js";
import { logger } from "../utills/logger.js";

export const addProduct=async(req,res,next)=>{
    try {
        const {productName,productPrice,categories,discount}=req.body;
        const productImage=req.file;
        if(!productName|| !productPrice||!productImage||!categories){
            return res.status(401).json({
                success:false,
                messege:"All fileds are required"
            })
        }
        const newProduct={};
        if(discount){
           const price=(productPrice*discount)/100;
           const finalPrice= productPrice-price;
           newProduct.finalPrice=finalPrice;
        }
        const cloudResponse= await uploadImage(productImage.path);
        newProduct.productName=productName;
        newProduct.productPrice=productPrice;
        newProduct.categories=categories;
        newProduct.productImage=cloudResponse.secure_url;
        const product= await Products.create(newProduct);
        logger.info(`new Product is created by`);
        return res.status(200).json({
            messege:"Product created",
            product,
        })

    } catch (error) {
        logger.error(error);
        next(error);
    }
}
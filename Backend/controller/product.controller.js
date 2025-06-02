import { Products } from "../model/product.model.js";
import { deleteImage, uploadImage } from "../utills/cloudinary.js";
import { logger } from "../utills/logger.js";

export const addProduct = async (req, res, next) => {
    try {
        const { productName, productPrice, categories, discount, stock } = req.body;
        const productImage = req.file;
        if (!productName || !productPrice || !productImage || !categories || !stock) {
            return res.status(401).json({
                success: false,
                messege: "Mandetory fileds are required"
            })
        }
        const newProduct = {};

        // if discount then calculations of discont is occerd and added to final price  
        if (discount) {
            const price = (productPrice * discount) / 100;
            const finalPrice = productPrice - price;
            newProduct.finalPrice = finalPrice;
        }
        const cloudResponse = await uploadImage(productImage.path);

        newProduct.productName = productName;
        newProduct.productPrice = productPrice;
        newProduct.categories = categories;
        newProduct.stock = stock;
        newProduct.productImage = cloudResponse.secure_url;
        newProduct.finalPrice = newProduct.finalPrice || productPrice;
        newProduct.discount = discount || 0;

        const product = await Products.create(newProduct);

        logger.info(`new Product is created ${product.productName}`);
        return res.status(200).json({
            messege: "Product created",
            product,
        })

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const editProduct = async (req, res, next) => {
    try {
        const { productName, productPrice, categories, discount, stock } = req.body;
        const { productId } = req.params;
        const productImage = req.file;
        if (!productName || !productPrice || !categories || !stock) {
            return res.status(401).json({
                success: false,
                messege: "Mandetory fileds are required"
            })
        }

        const newProduct = {};
        // if discount then calculations of discont is occerd and added to final price  
        if (discount) {
            const price = (productPrice * discount) / 100;
            const finalPrice = productPrice - price;
            newProduct.finalPrice = finalPrice;
        }

        if (productImage) {
            const publicId = productImage.split("/").pop().split(".")[0];
            await deleteImage(publicId);
            const cloudResponse = await uploadImage(productImage.path);
            newProduct.productImage = cloudResponse.secure_url;
        }

        newProduct.productName = productName;
        newProduct.productPrice = productPrice;
        newProduct.stock = stock;
        newProduct.categories = categories;
        newProduct.finalPrice = newProduct.finalPrice || productPrice;
        newProduct.discount = discount || 0;

        const product = await Products.findByIdAndUpdate(productId, newProduct, { new: true })

        logger.info(`${product.productName} is updated sucessfully`);

        return res.status(200).json({
            success: true,
            product,
            messege: "Product Updated"
        })

    } catch (error) {
        logger.error(error);
        next(error)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await Products.findByIdAndDelete(productId);
        const publicId = productImage.split("/").pop().split(".")[0];
        await deleteImage(publicId);
        return res.status(200).json({
            success: true,
            messege: `Deleted sucessfully ${product.productName}`
        })

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

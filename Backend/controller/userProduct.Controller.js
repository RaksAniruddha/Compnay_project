import { Products } from "../model/Adminmodel/product.model.js";
import { logger } from "../utills/logger.js";

export const fetchProductDeatils = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;
        const products = await Products.find().skip(skip).limit(limit);
        return res.status(200).json({
            products,
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const addToWishlist = async (req, res, next) => {
    try {
        const userId = req.id;
        const { productId } = req.params;
        let product = await Products.findById(productId);

        if (product.addToWishList.find(item => item === userId)) {
            return res.status(401).json({
                messege: "Allready added into wishlist"
            })
        }

        product.addToWishList.push(userId);
        logger.info("product is added into wishlist");
        return res.status(200).json({
            messege: "Added To Wishlist",
            product
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const removeToWishlist = async (req, res, next) => {
    try {
        const userId = req.id;
        const { productId } = req.params;

        let product = await Products.findById(userId, productId);
        if (!product) {
            return res.status(401).json({
                messege: "Fisrt Add into Wishlist"
            })
        }
        const newWishlist = product.addToWishList.filter(item => item !== userId);
        product.addToWishList = newWishlist;

        product = await product.save();

        return res.status(200).json({
            messege: "removed from Wishlist",
            product
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const fetchSearchDetails = async (_, res, next) => {
    try {
        const data = await Products.find()
            .populate({ path: "caterogyId", select: "categoryName" })
            .select("productName", "productImage")
        
        return res.status(200).json({
            data
        })
    } catch (error) {
        logger.info(error);
        next(error);
    }
}

import { Products } from "../model/product.model.js";
import { deleteImage, uploadImage } from "../utills/cloudinary.js";
import { logger } from "../utills/logger.js";
import { sendEmail } from "../utills/nodemailer.js";

export const addProduct = async (req, res, next) => {
    try {
        const { productName, productPrice, discount } = req.body;
        const { caterogyId } = req.params;
        const productImage = req.files?.productImage?.[0];
        const carouselImages = req.files?.carouselImages || [];
        if (req.role === "buyer") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        
        if (!productName || !productPrice || !productImage) {
            return res.status(401).json({
                success: false,
                messege: "Mandetory fileds are required"
            })
        }
        const newProduct = {
            carouselImage: []
        };

        // if carosel image has length less than zero

        if (carouselImages && carouselImages.length > 0) {
            for (const item of carouselImages) {
                const cloudResponse = await uploadImage(item.path);
                newProduct.carouselImage.push(cloudResponse.secure_url);
            }
        }

        // if discount then calculations of discont is occerd and added to final price  
        if (discount) {
            const price = (productPrice * discount) / 100;
            const finalPrice = productPrice - price;
            newProduct.finalPrice = finalPrice;
        }
        const cloudResponse = await uploadImage(productImage.path);

        newProduct.productName = productName;
        newProduct.productPrice = productPrice;
        newProduct.caterogyId = caterogyId;
        newProduct.productImage = cloudResponse.secure_url;
        newProduct.finalPrice = newProduct.finalPrice || productPrice;
        newProduct.discount = discount || 0;
        newProduct.user = req.id;

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
        const { productName, productPrice, discount } = req.body;
        const { productId, caterogyId } = req.params;

        if (req.role === "buyer") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        const productImage = req.files?.productImage?.[0];
        const carouselImages = req.files?.carouselImages || [];
        if (req.role === "buyer") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        if (!productName || !productPrice) {
            return res.status(401).json({
                success: false,
                messege: "Mandetory fileds are required"
            })
        }

        const newProduct = {
            carouselImage: []
        };
        // if discount then calculations of discont is occerd and added to final price  
        if (discount) {
            const price = (productPrice * discount) / 100;
            const finalPrice = productPrice - price;
            newProduct.finalPrice = finalPrice;
        }

        if (carouselImages && carouselImages.length > 0) {
            const product = await Products.findById(productId);
            for (const item of product.carouselImage) {
                const publicId = item.split("/").pop().split(".")[0];
                await deleteImage(publicId);
            }
            for (const item of carouselImages) {
                const cloudResponse = await uploadImage(item.path);
                newProduct.carouselImage.push(cloudResponse.secure_url);
            }
        }

        if (productImage) {
            const product = await Products.findById(productId);
            const publicId = product.productImage.split("/").pop().split(".")[0];
            await deleteImage(publicId);
            const cloudResponse = await uploadImage(productImage.path);
            newProduct.productImage = cloudResponse.secure_url;
        }

        newProduct.productName = productName;
        newProduct.productPrice = productPrice;
        newProduct.caterogyId = caterogyId;
        newProduct.finalPrice = newProduct.finalPrice || productPrice;
        newProduct.discount = discount || 0;
        newProduct.user = req.id;

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
        if (req.role === "buyer") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        const product = await Products.findById(productId);
        const publicId = product.productImage.split("/").pop().split(".")[0];
        await deleteImage(publicId);
        for (const item of product.carouselImage) {
            const publicId = item.split("/").pop().split(".")[0];
            await deleteImage(publicId);
        }
        await Products.findByIdAndDelete(productId);
        return res.status(200).json({
            success: true,
            messege: `Deleted sucessfully ${product.productName}`
        })

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const getAllProduct = async (req, res, next) => {
    try {
        const userId = req.id;

        if (req.role === "buyer") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        const products = await Products.find({ user: userId });


        if (products.length <= 0) {
            return res.status(401).json({
                success: false,
                messege: "Sorry Add First"
            })
        }
        return res.status(200).json({
            products
        })

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const getAllProductAdmin = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;
        if (req.role !== "super_admin") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        const product = await Products.find().skip(skip).limit(limit);
        if (product.length <= 0) {
            return res.status(401).json({
                messege: "There Is No product to show"
            })
        }
        return res.status(200).json({
            messege: "",
            product
        })

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const bulckStockEditByAdmin = async (req, res, next) => {
    try {
        if (req.role !== "super_admin") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        const { stock } = req.body;

        await Products.updateMany({}, { $inc: { stock: stock } });
        logger.info("All Products stock is updated");
        return res.status(200).json({
            messege: "All Stock Updated",
        })
    } catch (error) {
        logger.info(error);
        next(error);
    }
}
export const stockEdit = async (req, res, next) => {
    try {
        const { stock } = req.body;
        const { productId } = req.params;
        const userId = req.id;
        const userRole = req.role;
        if (req.role === "buyer") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        if (userRole === "vendor" || userRole === "store_Manager") {
            let product = await Products.findById(productId, userId);
            product.stock = stock;
            product = await product.save();
        }

        let product = await Products.findById(productId);
        product.stock = stock;
        product = await product.save();

        logger.info(`product is updated`);

        return res.status(200).json({
            messege: "Stock Updated Succesfully",
            product
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const stockAlert = async (req, res, next) => {
    try {
        if (req.role === "buyer") {
            return res.status(400).json({
                messege: "This Operation is not for you"
            })
        }
        const products = await Products.find({ stock: { $lte: 10 } }).populate("user");
        products.forEach((item) => {
            console.log(item.user.email);

            sendEmail(item.user.email, "Stock Issue", "please refill Your Stock")
        })
        res.status(200).json({
            messege: "mail had sended to all low stock vendors",
            products
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const trackStock = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;
        const userId = req.id;
        const userRole = req.role;
        if (userRole === "buyer") {
            return res.status(401).json({
                messege: "This Action is Not For You"
            })
        }
        if (userRole === "vendor" || userRole === "store_Manager") {
            const products = await Products.find({ userId })
                .select('productName finalPrice stock')
                .skip(skip).limit(limit);
            if (products.length <= 0) {
                return res.status(401).json({
                    messege: "There Is No product to show"
                })
            }
            return res.status(200).json({
                products
            })
        }
        const products = await Products.find()
            .select('productName finalPrice stock')
            .skip(skip).limit(limit);
        return res.status(200).json({
            products
        })
    } catch (error) {
        logger.info(error);
        next(error);
    }
}
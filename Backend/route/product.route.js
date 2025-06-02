import express from 'express';
import { isAuthenticated } from '../middleware/isAuth.js';
import { addProduct, deleteProduct, editProduct } from '../controller/product.controller.js';
import { upload } from '../utills/multer.js';

const router= express.Router();

router.route("/").post(isAuthenticated,upload.single("productImage"),addProduct);
router.route("/editProduct/:productId").post(isAuthenticated,upload.single("productImage"),editProduct);
router.route("/deleteProduct/:productId").post(isAuthenticated,deleteProduct);

export default router;

import express from 'express';
import { isAuthenticated } from '../middleware/isAuth.js';
import {
    addProduct, bulckStockEditByAdmin, deleteProduct, editProduct,
    getAllProduct, getAllProductAdmin, stockAlert, stockEdit,
    trackStock
} from '../controller/product.controller.js';
import { upload } from '../utills/multer.js';

const router = express.Router();

router.route("/").get(isAuthenticated, getAllProduct);
router.route("/addProduct/:caterogyId").post(isAuthenticated, upload.fields([
    { name: 'productImage', maxCount: 1 },
    { name: 'carouselImages', maxCount: 50 }
]), addProduct);
router.route("/editProduct/:productId/:caterogyId").put(isAuthenticated, upload.fields([
    { name: 'productImage', maxCount: 1 },
    { name: 'carouselImages', maxCount: 50 }
]), editProduct);
router.route("/deleteProduct/:productId").delete(isAuthenticated, deleteProduct);
router.route("/geAllProductAdmin").get(isAuthenticated, getAllProductAdmin);
router.route("/bulckStockEditByAdmin").put(isAuthenticated, bulckStockEditByAdmin);
router.route("/stockEdit/:productId").post(isAuthenticated, stockEdit);
router.route("/stockAlert").get(isAuthenticated, stockAlert);
router.route("/trackStock").get(isAuthenticated, trackStock);

export default router;

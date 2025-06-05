import express from 'express';
import { isAuthenticated } from '../middleware/isAuth.js';
import { addToWishlist, fetchProductDeatils, fetchSearchDetails, removeToWishlist } from '../controller/userProduct.Controller.js';
const router=express.Router();

router.route("/").get(isAuthenticated,fetchProductDeatils);
router.route("/fetchSearchDetails").get(isAuthenticated,fetchSearchDetails);
router.route("/removeWishlist").delete(isAuthenticated,removeToWishlist);
router.route("/addToWishlist").post(isAuthenticated,addToWishlist);
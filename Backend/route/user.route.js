import express from 'express';
import {
    addDeliveryAddress, editPersonalDetails,
    ForgotPassword, generateNewPassword,
    isUserVeryfied, login, logout, register,
    setAsDefaultAddress, viewPersonalDetails
} from '../controller/user.controller.js';
import { isAuthenticated } from '../middleware/isAuth.js';
import { upload } from '../utills/multer.js';
const router = express.Router();


// Auth Routes Start
router.route("/").post(upload.single("adharCard"),register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/forgot-password").post(ForgotPassword);
router.route("/isuserveryfied/:userId").post(isUserVeryfied);
router.route("/generateNewPassword/:userId").post(generateNewPassword);
// Auth Routes End

router.route("/viewPersonalDetails").get(isAuthenticated, viewPersonalDetails);
router.route("/editPersonalDetails").put(isAuthenticated,upload.single("profilePhoto") ,editPersonalDetails);
router.route("/addDeleveryAddress").post(isAuthenticated, addDeliveryAddress);
router.route("/setAsDefaultAddress/:addressId").patch(isAuthenticated, setAsDefaultAddress);


export default router;
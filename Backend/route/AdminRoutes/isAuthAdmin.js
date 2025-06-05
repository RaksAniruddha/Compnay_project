import express from 'express';
import {
    adminLogin, adminLogout, getAllAdminDetails,
    giveAcessToOtherAdmin, registerAdmin, rejectAcessOfAdmin
} from '../../controller/AdminController/allAdminAuth.js';
import { upload } from '../../utills/multer.js';
import { isAuthenticated } from '../../middleware/isAuth.js';

const router = express.Router();

router.route("/").post(upload.single("adharCard"), registerAdmin);
router.route("/login").post(adminLogin);
router.route("/logout").get(adminLogout);

// give right access to rightAdmin start
router.route("/getAllAdminDetails").get(isAuthenticated, getAllAdminDetails);
router.route("/giveAccess/:vendorId").post(isAuthenticated, giveAcessToOtherAdmin);
router.route("/rejectAccess/:vendorId").delete(isAuthenticated, rejectAcessOfAdmin);
// give right access to rightAdmin end

export default router;
import express from 'express';
import { isAuthenticated } from '../middleware/isAuth.js';
import { addCategory, deleteCategory, editCategory, getAllCategory } from '../controller/category.controller.js';

const router=express.Router();

router.route("/").get(isAuthenticated,getAllCategory);
router.route("/addCategory").post(isAuthenticated,addCategory);
router.route("/editCategory/:categoryId").put(isAuthenticated,editCategory);
router.route("/deleteCategory/:categoryId").delete(isAuthenticated,deleteCategory);

export default router;
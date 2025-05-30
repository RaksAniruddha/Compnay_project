import express from 'express';
import { ForgotPassword, isUserVeryfied, login, logout, register } from '../controller/user.controller.js';
const router=express.Router();
router.route("/").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/forgot-password").post(ForgotPassword);
router.route("/isuserveryfied").post(isUserVeryfied);
export default router
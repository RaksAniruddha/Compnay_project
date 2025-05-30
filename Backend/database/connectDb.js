import mongoose from "mongoose";
import { logger } from '../utills/logger.js';

export const connectDb=async(req,res,next)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        logger.info("mongo conncted");
    } catch (error) {
        logger.error(error);
    }
}
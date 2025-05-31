import jwt from 'jsonwebtoken';
import { logger } from '../utills/logger.js';
export const isAuthenticated=async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:true,
                massege:"User not autheticate"
            })
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({
                success:true,
                massege:"User not autheticate"
            })
        }
        req.id=decoded.userId;
        next();
    } catch (error) {
        logger(error)
    }
}
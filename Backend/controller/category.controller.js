import { Category } from "../model/category.model.js";
import { logger } from "../utills/logger.js";

export const addCategory=async(req,res,next)=>{
    try {
        const {categoryName,description}=req.body;
        if(req.role!=="super_admin"){
            return res.status(401).json({
                messege:" sorry...  This Service is Not For You"
            })
        }
        if(!categoryName||!description){
            return res.status(401).json({
                messege:"All Fields Are Required"
            })
        }
        const category= await Category.create({categoryName,description});
        logger.info("new category is created");
        return res.status(200).json({
            category
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const editCategory=async(req,res)=>{
    try {
        const {categoryName,description}=req.body;
        const {categoryId}=req.params;
         if(req.role!=="super_admin"){
            return res.status(401).json({
                messege:" sorry...  This Service is Not For You"
            })
        }
        if(!categoryName||!description){
            return res.status(401).json({
                messege:"All Fields Are Required"
            })
        }
        const category= await Category.findByIdAndUpdate(categoryId,{categoryName,description},{new:true});
        logger.info("new category is created");
        return res.status(200).json({
            category
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const getAllCategory=async(req,res)=>{
    try {
        const category= await Category.find();
        if(category.length<=0){
            return res.status(401).json({
                messege:true,
            })
        }
        return res.status(200).json({
           category
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const deleteCategory=async(req,res)=>{
    try {
        const {categoryId}=req.params;
        if(req.role!=="super_admin"){
            return res.status(401).json({
                messege:" sorry...  This Service is Not For You"
            })
        }
        const category=await Category.findByIdAndDelete(categoryId);
        logger.info("one category is deleted");
        return res.status(200).json({
            category
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}
import { Vendor } from "../../model/Adminmodel/vendor.model.js";
import { User } from "../../model/user.model.js";
import { uploadImage } from "../../utills/cloudinary.js";
import bcrypt from "bcryptjs";
import { logger } from "../../utills/logger.js";

export const registerAdmin = async (req, res,next) => {
    try {
        const { username, email, password, phoneNumber, gstInNumber, role } = req.body;
        const adharCard = req.file;
        if (!username || !email || !password || !phoneNumber || !gstInNumber || !role || !adharCard) {
            return res.status(401).json({
                success: false,
                messege: "All Fields Are Required"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const cloud_response = await uploadImage(adharCard.path);
        let vendor = await Vendor.create({
            username,
            email,
            password: hashPassword,
            phoneNumber,
            gstInNumber,
            role,
            adharCard: cloud_response.secure_url
        })

        return res.status(200).json({
            vendor,
            messege: "Wait For Admin Veryfication"
        })


    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                message: "Register first"
            });
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            return res.status(401).json({
                message: "Invalid email ID or password"
            });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

        logger.info(`${user.username} is logged in sucessfully`);

        res.status(200).cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        }).json({
            message: "User Logged in successfully",
            user
        });

    } catch (error) {
        logger.error(error);
        next(error);
    }

}

export const adminLogout = async (_, res) => {
    try {
        logger.info("logout sucessfully");
        res.status(200).cookie("token", "", { maxAge: 0 }).json({
            massege: "Logout Sucessfully",
            success: true
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const getAllAdminDetails = async (req, res, next) => {
    try {
        const user = req.role;

        if (user === "buyer") {
            return res.status(401).json({
                messege: "This Operation is not for you"
            })
        }

        const data = await Vendor.find();

        return res.status(200).json({
            data
        })
    } catch (error) {
        next(error);
        logger.info(error);
    }
}

export const giveAcessToOtherAdmin = async (req, res, next) => {
    try {
        const user = req.role;
        const { vendorId } = req.params;
        if (user !== "super_admin") {
            return res.status(401).json({
                messege: "This Operation is not for you"
            })
        }
        const vendor = await Vendor.findById(vendorId);
        const newUser = await User.create({
            username: vendor.username,
            password: vendor.password,
            email: vendor.email,
            role: vendor.role,
            phoneNumber: vendor.phoneNumber,
            gstInNumber: vendor.gstInNumber,
            adharCard: vendor.adharCard
        })
        logger.info("new user is created by super admin");
        return res.status(200).json({
            newUser
        })

    } catch (error) {
        next(error);
        logger.error(error);
    }
}
export const rejectAcessOfAdmin = async (req, res, next) => {
    try {
        const { vendorId } = req.params;
        const user=req.role;
        if(user!=="super_admin"){
            return res.status(401).json({
                messege:"This Option IS Not For You"
            })
        }
        let vendor = await Vendor.findById(vendorId);
        const publicId = vendor.adharCard.split("/").pop().split(".")[0];
        await deleteImage(publicId);
        vendor=await Vendor.findByIdAndDelete(vendorId);
        return res.status(200).json({
            vendor
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}
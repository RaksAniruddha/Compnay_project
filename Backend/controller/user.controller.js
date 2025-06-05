import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js'
import { sendEmail } from '../utills/nodemailer.js';
import { otpGenerator } from '../utills/otpGenerator.js';
// import { AppError } from '../middleware/errorHandler.js';
import { logger } from '../utills/logger.js';
import { deleteImage, uploadImage } from '../utills/cloudinary.js';
import { Address } from '../model/userdeliveryDetails.model.js';
import { Vendor } from '../model/Adminmodel/vendor.model.js';

export const register = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body;

        if (!username || !email || !password) {
            // throw new AppError('All Fields Are required',401);
            return res.status(404).json({
                messege: "All fields are required"
            })
        }
        let user = await User.find({ email: email });
        if (user.length !== 0) {
            return res.status(404).json({
                messege: "User Allready exixts"
            })
        }

     
        const hashPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            username,
            email,
            password: hashPassword,
        })
        logger.info(`new User registration ${user.username, user.email}`);
        return res.status(200).json({
            messege: "User created"
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}


export const login = async (req, res, next) => {
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

export const logout = async (_, res) => {
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

export const ForgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                messege: "We can not find your email."
            })
        }
        user.otp_code = otpGenerator();
        user = await user.save();
        sendEmail(email, "Forgot Password Otp", `Hey Its Your Veryfication Code:${user.otp_code}
            Go And Verify ${process.env.FRONTEND_URL + "/" + user._id}`);
        return res.status(200).json({
            success: true,
            messege: "Find Veryfication Code in your Email"
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}
export const isUserVeryfied = async (req, res, next) => {
    try {
        const { otp_code } = req.body;
        const { userId } = req.params;
        let user = await User.findById(userId);
        if (!user.otp_code.includes(otp_code)) {
            return res.status(400).json({
                messege: "Sorry Wrong Otp. Resend?"
            })
        }
        user.otp_code = "";
        user.is_verified = true;
        await user.save();
        logger.info(`${user.username} is a verifyed User`);
        return res.status(200).json({
            success: true,
            messege: "User Verifed"
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

// export const Resend = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         let user = await User.findById(userId);
//         user.otp_code = otpGenerator();
//         user= await user.save();
//         sendEmail(user.email, "Forgot Password Otp", `Hey Its Your Veryfication Code:${otp_code}`);
//         return res.status(200).json({
//             messege:"Resend Sucessfull"
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }


export const generateNewPassword = async (req, res, next) => {
    try {
        const { password } = req.body;
        const { userId } = req.params;
        let user = await User.findById(userId);
        if (!user.is_verified) {
            return res.status(401).json({
                success: false,
                messege: "Verify First"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        user.password = hashPassword;
        user.is_verified = false;
        user = await user.save();
        return res.status(200).json({
            success: true,
            user,
            messege: "Password Updated Succesfully"
        })

    } catch (error) {
        logger.error(error);
        next(error);
    }
}


export const viewPersonalDetails = async (req, res, next) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).select("username email profilePhoto").populate("defaultAddress");
        return res.status(200).json({
            user
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const editPersonalDetails = async (req, res, next) => {
    try {
        const userId = req.id;
        const profilePhoto = req.file;
        const { username } = req.body;
        if (!profilePhoto || !username) {
            return res.status(401).json({
                success: false,
                messege: "All fields are required"
            })
        }
        let user = await User.findById(userId);
        if (user.profilePhoto) {
            const publicId = user.profilePhoto.split("/").pop().split(".")[0];
            await deleteImage(publicId);
        }
        const cloud_response = await uploadImage(profilePhoto.path);
        user.username = username;
        user.profilePhoto = cloud_response.secure_url;
        user = await user.save();
        logger.info(`${user.username} is updated`);
        return res.status(200).json({
            user,
            messege: "user is updated"
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const addDeliveryAddress = async (req, res, next) => {
    try {
        const { fullname, primaryPhoneNumber, secondaryPhoneNumber,
            category, address, city, state, pincode } = req.body;

        const userId = req.id;

        if (!fullname || !primaryPhoneNumber || !category
            || !address || !city || !state || !pincode) {
            return res.status(400).json({
                messege: "All fields are required"
            })
        }

        // step -1 create new Adress
        const newaddress = await Address.create({
            fullname, primaryPhoneNumber, secondaryPhoneNumber,
            category, address, city, state, pincode
        })

        let user = await User.findById(userId);
        // Step 2 only applicable for first time Address insertion
        if (!user.defaultAddress) {
            user.defaultAddress = newaddress._id;
            user = await user.save();
        }
        logger.info(`new delivery adress is added by ${user.username}`)
        return res.status(200).json({
            newaddress,
            user
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export const setAsDefaultAddress = async (req, res, next) => {
    try {
        const userId = req.id;
        const { addressId } = req.params;
        console.log(addressId);

        let user = await User.findById(userId);
        user.defaultAddress = addressId;
        user = await user.save();
        logger.info(`default adress is changed by ${user.username}`);
        return res.status(200).json({
            user
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

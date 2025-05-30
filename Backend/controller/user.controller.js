import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js'
import { sendEmail } from '../utills/nodemailer.js';
import { otpGenerator } from '../utills/otpGenerator.js';
import { AppError } from '../middleware/errorHandler.js';
import { logger } from '../utills/logger.js';

export const register = async (req, res,next) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            throw new AppError('All Fields Are required',401);
            //  return res.status(404).json({
            //     messege: "All fields are required"
            // })
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
            password: hashPassword
        })
        logger.info(`new User registration ${user.username,user.email}`);
        return res.status(200).json({
            messege: "User created"
        })
    } catch (error) {
       logger.error(error);
       next(error);
    }
}


export const login = async (req, res) => {
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

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        }).json({
            message: "User Logged in successfully",
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }

}

export const logout = async (_, res) => {
    try {
        res.status(200).cookie("token", "", { maxAge: 0 }).json({
            massege: "Logout Sucessfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            massege: "Failed to Logout"
        })
    }
}

export const ForgotPassword = async (req, res) => {
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
        user=await user.save();
        sendEmail(email, "Forgot Password Otp", `Hey Its Your Veryfication Code:${user.otp_code}
            Go And Verify ${process.env.FRONTEND_URL + "/" + user._id}`);
        return res.status(200).json({
                success: true,
                messege: "Find Veryfication Code in your Email"
            })
    } catch (error) {
        console.log(error);
    }
}
export const isUserVeryfied = async (req, res) => {
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
        await user.save();
        return res.status(200).json({
            success: true,
            messege: "Go to Your Login Page"
        })
    } catch (error) {
        console.log(error);
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
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config({});

export const sendEmail = (email, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure:true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        },
    });

    const mailOptions = {
        from: process.env.MAIL_USER, 
        to: email,
        subject,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

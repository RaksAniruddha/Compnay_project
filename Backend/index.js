import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoute from './route/user.route.js'

import { connectDb } from './database/connectDb.js';
dotenv.config({});
const app=express();
const PORT=process.env.PORT||3000
connectDb();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/user",userRoute);

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
});
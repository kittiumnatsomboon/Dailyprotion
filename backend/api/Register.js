const connectDB = require("./Mongodb");
const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs')


router.post('/',async(req,res)=>{
    const{fullname,dateofbirth,email,password} = req.body();
    
})


connectDB();


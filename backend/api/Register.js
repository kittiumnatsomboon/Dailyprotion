const connectDB = require("./Mongodb");
const express = require('express');
const router = express.Router();


router.post('/',async(req,res)=>{
    const{fullname,Dateofbirth,email,password} = req.body;
    console.log(fullname , Dateofbirth , email , password)
})


connectDB();
module.exports = router;

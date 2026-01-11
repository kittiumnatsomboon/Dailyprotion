const express = require('express');
const router = express.Router();
const pool = require('../Connectmysql')



router.get('/',async(req,res)=>{
    res.json({message:"HELLO"})
})

module.exports = router;
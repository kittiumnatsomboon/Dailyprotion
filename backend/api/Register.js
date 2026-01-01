const connectDB = require("./Mongodb");
const express = require('express');
const router = express.Router();
const User = require('./Userschema')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


connectDB();
module.exports = router;

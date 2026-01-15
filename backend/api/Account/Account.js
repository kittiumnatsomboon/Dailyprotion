const express = require('express');
const router = express.Router();
const pool = require('../Connectmysql');
const authMiddleware = require('../authMiddleware');


router.get('/', authMiddleware, (req, res, next) => {
    const userProfile = {
        userid: req.user.userid,
        email: req.user.email,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        usertype: req.user.usertype,
        userimage: req.user.userimage,
        Dateofbirth:req.user.Dateofbirth
        // ... other profile details
    };
    res.status(200).json(userProfile);
})

module.exports = router;
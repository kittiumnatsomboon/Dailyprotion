const express = require('express');
const router = express.Router();
const pool = require('../Connectmysql');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/',  async (req, res) => {
    const { email, password } = req.body;
    try {
        const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (result.length > 0) {
            const user = result[0];
            // Compare the hashed password
            const isMatch = await bcryptjs.compare(password, user.password);
            if (isMatch) {
                res.status(201).json({ message: 'สมัครสมาชิกสำเร็จ' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        }else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'การเชื่อมต่อฐานข้อมูลผิดพลาด โปรดลองใหม่ภายหลัง' });
    }
})

module.exports = router;
const express = require('express');
const router = express.Router();
const pool = require('../Connectmysql');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        console.log(result)
        if (result.length > 0) {
            const user = result[0];
            // Compare the hashed password
            const isMatch = await bcryptjs.compare(password, user.password);

            if (isMatch) {
                const payload = {
                    userid: user.userid,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    usertype: user.usertype // e.g., 'admin', 'user'
                };
                // 3. Sign the token
                const token = jwt.sign(payload,process.env.SECRET, { expiresIn: '1h' });
                res.status(201).json({ message: 'เข้าสู่ระบบสำเร็จ',token});
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }

        } else {
            res.status(404).json({message:'User not found'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'การเชื่อมต่อฐานข้อมูลผิดพลาด โปรดลองใหม่ภายหลัง' });
    }
})

module.exports = router;
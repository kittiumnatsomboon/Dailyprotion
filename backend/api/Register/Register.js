const express = require('express');
const router = express.Router();
const pool = require('../Connectmysql');
const bcryptjs = require('bcryptjs');
const Sendmailregister = require('./Sendmail')

router.post('/', async (req, res) => {
    const { firstname, lastname, Dateofbirth, email, password } = req.body;
    
    try {
        const [result, fields] = await pool.query('SELECT COUNT(*) AS count FROM users WHERE email = ?', email);
        if (result[0].count > 0) {
            return res.status(400).json({ error: 'มีอีเมลล์อยู่แล้ว กรุณาระบุอีเมลล์อื่น' }); // Must return here
        }
        const hashedPassword = await bcryptjs.hash(password,10);
        const dateOnly = Dateofbirth.split('T')[0];
        await pool.query('INSERT INTO users (firstname,lastname,Dateofbirth,email, password) VALUES (?,?,?,?,?)', 
            [firstname , lastname ,dateOnly,email,hashedPassword]);
            // ส่งเมลล์หลังสมัคร
        await Sendmailregister(email, firstname);
        // console.log(Sendmailregister)
        res.status(201).json({ message: 'สมัครสมาชิกสำเร็จ' });
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'การเชื่อมต่อฐานข้อมูลผิดพลาด โปรดลองใหม่ภายหลัง'});
    }
});

module.exports = router;
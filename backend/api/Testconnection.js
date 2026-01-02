const express = require('express');
const router = express.Router();
const pool = require('./Connectmysql')


router.get('/', async (req, res) => {
    try {
        // Use the pool to run a query directly
        // The pool automatically manages borrowing and returning connections
        const [rows, fields] = await pool.query('SELECT * FROM users'); 
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
})


module.exports = router;

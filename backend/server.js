const express = require('express');
const app = express();
const cors = require('cors');
// dotenv
require('dotenv').config();
// cors production
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' // Specify the allowed origin and port
}));
// testconnection
app.use('/api/connectdb/',require('./api/Testconnection'))

app.get('/', (req, res) => {
  res.json({ message: 'Data from secure API!' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
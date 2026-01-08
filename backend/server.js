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
// success
// app.use('/api/connectdb/',require('./api/Testconnection'))


// Register API
app.use('/api/register/',require('./api/Register/Register'))

app.get('/', (req, res) => {
  res.json({ message: 'Data from secure API!' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const app = express();
const route = express.Router();
const cors = require('cors');
// dotenv
require('dotenv').config();
// mongodb
require('./api/Mongodb')
// cors production
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [process.env.FRONTEND_URL_PROD] // e.g., "https://www.yourfrontend.com"
  : [process.env.FRONTEND_URL_LOCAL, 'http://localhost:3000']; // e.g., "http://localhost:3000" for dev

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl) or specific origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // No error, allow request
    } else {
      callback(new Error('Not allowed by CORS')); // Error, block request
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  credentials: true, // Allow cookies/authorization headers if needed
  optionsSuccessStatus: 204 // For legacy browsers
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.json({ message: 'Data from secure API!' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
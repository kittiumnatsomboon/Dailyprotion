// authMiddleware.js
const jwt = require('jsonwebtoken');
// Replace with your actual secret key
const secretKey = process.env.SECRET

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'No authorization token found.' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Token format is invalid.' });
  }

  try {
    // Verify the token
    const user = jwt.verify(token, secretKey);
    req.user = user; // Attach user payload to the request object
    next(); // Proceed to the next middleware/route handler

  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token.' }); // 403 Forbidden
  }
};

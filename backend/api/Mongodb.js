const mongoose = require('mongoose')
const connectDB = async () => {
    const connectionmongodb = process.env.MONGOURI;
  try {
    await mongoose.connect(connectionmongodb, {
      // Mongoose automatically handles connection pooling and options in recent versions
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on connection failure
  }
};

// Call the connection function
module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async (mongoUri) => {
  if (!mongoUri) {
    throw new Error('MONGO_URI environment variable is not set.');
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connection established');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
};

module.exports = connectDB;


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

/*For JWT Secret:
Generate a strong random string. You can use a password generator or run this command in your terminal:
bashCopynode -e "console.log(require('crypto').randomBytes(64).toString('hex'))"*/
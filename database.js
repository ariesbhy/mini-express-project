const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://basmahfarhan97:Bb97798034@books.26eoo.mongodb.net/"
  );
  console.log("Connected to MongoDB");
};

module.exports = connectDB;

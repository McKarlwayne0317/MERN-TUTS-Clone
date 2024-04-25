const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://manaloj0317:manaloj0317@jeffcluster.z2mcssj.mongodb.net/mernapp?retryWrites=true&w=majority"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (e) {
    console.error(`Error: ${e.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;

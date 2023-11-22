const mongoose = require("mongoose");

const dbUrl = process.env.DATABASE_URL;

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to Database!");
  } catch (error) {
    console.log("Connection failed with error: ", error);
  }
};

module.exports = InitiateMongoServer;

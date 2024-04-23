const mongoose = require("mongoose");

const dbConnection = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connection successfull");
    })
    .catch(() => {
      console.log("Database connection failed");
    });

module.exports = dbConnection;

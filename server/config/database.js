const mongoose = require("mongoose");
require("dotenv").config({path: './config/.env'});

const connectDatabase = async () => {
  const mongoUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
  console.log(mongoUrl)
  await mongoose
    .connect(mongoUrl)
    .then(() => console.log(`Connected to MongoDB`))
    .catch((err) =>
      console.error(
        "Error connecting to MongoDB:",
        err.message,
      ),
    );
};

module.exports = connectDatabase;

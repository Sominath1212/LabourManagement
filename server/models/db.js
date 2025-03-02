const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("mongo connected.....✅");
  })
  .catch((err) => {
    console.log("mongo connection error....❌");
  });

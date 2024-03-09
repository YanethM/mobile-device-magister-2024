const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: String,
  user_email: String,
  gender: String,
  address: String,
});

module.exports = mongoose.model("UserCollection", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {type: String, required: true},
  user_email: {type: String, required: true, unique: true},
  gender: {type: String, required: true},
  address: {type: String, required: true},
  avatar: {type: String, required: true},
  user_password: {type: String, required: true},
  user_role: {type: String, required: true},
  active: {type: Boolean, required: true, default: true},
});

module.exports = mongoose.model("UserCollectionDevMobile", userSchema);
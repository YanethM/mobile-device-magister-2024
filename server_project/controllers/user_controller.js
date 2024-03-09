const userModel = require("../models/user_model");
 
const createUser = async (req, res) => {
  const { user_name, user_email, gender, address } = req.body;
  console.log(req.body);
};

module.exports = { createUser };

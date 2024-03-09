const userModel = require("../models/user_model");

const createUser = async (req, res) => {
  try {
    const { user_name, user_email, gender, address } = req.body;

    const newUser = new userModel({
      user_name,
      user_email,
      gender,
      address,
    });

    const userSaved = await newUser.save();
    console.log(userSaved);
    res.status(201).json({ message: "User created", userSaved });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

module.exports = { createUser };

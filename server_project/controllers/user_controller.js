const userModel = require("../models/user_model");

const createUser = async (req, res) => {
  try {
    const {
      user_name,
      user_email,
      gender,
      address,
      user_password,
      user_role,
      active,
    } = req.body;

    const avatar = req.file ? req.file.filename : null;
    console.log(avatar);

    const newUser = new userModel({
      user_name,
      user_email,
      gender,
      address,
      avatar,
      user_password,
      user_role,
      active,
    });

    const userSaved = await newUser.save();
    console.log(userSaved);
    res.status(201).json({ message: "User created", userSaved });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
  }
};

module.exports = { createUser, getUsers };

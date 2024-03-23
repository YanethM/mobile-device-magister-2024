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

    console.log(req.file);
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
    console.log(error);
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

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error getting user" });
  }
};

const updateUserById = async (req, res) => {
  console.log('Ingrese al user controller');
  try {
    const { id } = req.params;
    const { user_name, user_email, gender, address, user_role, active } =
      req.body;
    const updateUser = {};

    if (req.file) updateUser.avatar = req.file.filename;

    updateUser.user_name = user_name;
    updateUser.user_email = user_email;
    updateUser.gender = gender;
    updateUser.address = address;
    updateUser.user_role = user_role;
    updateUser.active = active;

    const user = await userModel.findByIdAndUpdate(id, updateUser, {new: true});
    console.log(user);
    res.status(200).json({ message: "User updated", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted", user });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
};

module.exports = { createUser, getUsers, getUserById, updateUserById, deleteUserById };

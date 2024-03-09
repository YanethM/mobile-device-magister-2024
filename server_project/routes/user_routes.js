const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");

// http:localhost:3000/api/v1/users/new-user
router.post("/new-user", userController.createUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/users/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// http:localhost:3000/api/v1/users/new-user
router.post("/new-user", upload.single("avatar"), userController.createUser);
// http:localhost:3000/api/v1/users
router.get("/", userController.getUsers);

module.exports = router;

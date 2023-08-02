const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController")
const userController = require("./../controllers/userController")

router.route("/").get(userController.getAllUsers).post(userController.addUser)
router.route("/:id").get(userController.getUser)

router.route("/auth/login").post(authController.login)



module.exports = router
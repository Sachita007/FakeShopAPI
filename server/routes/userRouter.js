const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

router.route("/").get(userController.getAllUsers).post(userController.addUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/auth/login").post(authController.login);
router
  .route("/auth/profile")
  .get(authController.protect, userController.getUser);

module.exports = router;

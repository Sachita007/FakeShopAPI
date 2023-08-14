const express = require("express");
const router = express.Router();
const cartController = require("./../controllers/cartController");

router.route("/").get(cartController.getAllCart);

router
  .route("/:id")
  .get(cartController.getCart)
  .post(cartController.addCart)
  .patch(cartController.editCart)
  .delete(cartController.deleteCart);

router.route("/:id/:productId").delete(cartController.deleteItem);

module.exports = router;

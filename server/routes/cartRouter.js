const express = require("express");
const router = express.Router();
const cartController = require("./../controllers/cartController")



router.route("/").get(cartController.getAllCart)

router.route("/:id").get(cartController.getCart).post(cartController.addCart).patch()




module.exports = router;
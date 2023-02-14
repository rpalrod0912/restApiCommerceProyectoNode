const express = require("express");
const router = express.Router();
const cartsController = require("../../controllers/cartsController");

router.route("/").get(cartsController.getAllCarts);

router
  .route("/:userId")
  .get(cartsController.getCart)
  .post(cartsController.insertProduct);

module.exports.router = router;

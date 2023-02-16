const express = require("express");
const router = express.Router();
const cartsController = require("../../controllers/cartsController");

router
  .use()
  .route("/")
  .get(cartsController.getAllCarts)
  .post(cartsController.insertProduct)
  .patch(cartsController.deleteProduct);

router.route("/:userId").get(cartsController.getCart);

module.exports.router = router;

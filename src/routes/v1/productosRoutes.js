const express = require("express");
const router = express.Router();
const productosController = require("../../controllers/productosController");

//URL AQUí: /v1/api/productos

router
  .route("/")
  .get(productosController.getAllProduct) //GET ALL PRODUCTS
  .post(productosController.insertOneProduct); //INSERT ONE PRODUCT
//GET OFERTAS
router.route("/ofertas").get(productosController.getSaleProducts);

router.route("/tallas").get(productosController.getSizes);
router.route("/colores").get(productosController.getColors);

router
  .route("/:prod")
  .get(productosController.getOneProduct) //GET ONE PRODUCT
  .delete() //DELETE ONE PRODUCT
  .put(); //UPDATE ONE PRODUT

module.exports.router = router;

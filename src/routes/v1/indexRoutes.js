const express = require("express");
const router = express.Router();
const cartsRouter = require("./cartsRouter");
const productosRoutes = require("./productosRoutes");
const usersRouter = require("./usersRoutes");

const cors = require("cors");
const corOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

//URL AQUÍ: /v1/api
router.get("/", (req, res, next) => {
  res.send("Hola Mundo");
});

router.use("/carts", cartsRouter.router);
router.use("/users", usersRouter.router);
router.use("/productos", productosRoutes.router);

module.exports.router = router;

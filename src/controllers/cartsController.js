const cartsServices = require("../services/cartsServices");

const getAllCarts = (req, res, next) => {
  const carts = cartsServices.getAllCarts();
  if (!carts) {
    res.status(404).send("NO HAY CARROS");
    return;
  }

  res.send(carts);
};

const getCart = (req, res, next) => {
  const { userId } = req.params;

  const oneCart = cartsServices.getOneCart(userId);
  if (!oneCart) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(oneCart);
};

module.exports = {
  getAllCarts,
  getCart,
};

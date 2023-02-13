const cartsModelo = require("../database/cartsModelo.js");

const getAllCarts = () => {
  const carritos = cartsModelo.getAll();
  return carritos;
};

const getOneCart = (id) => {
  const oneCart = cartsModelo.getCart(id);
  return oneCart;
};

module.exports = {
  getAllCarts,
  getOneCart,
};

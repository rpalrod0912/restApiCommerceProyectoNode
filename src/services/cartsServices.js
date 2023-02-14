const cartsModelo = require("../database/cartsModelo.js");

const getAllCarts = () => {
  const carritos = cartsModelo.getAll();
  return carritos;
};

const getOneCart = (id) => {
  const oneCart = cartsModelo.getCart(id);
  return oneCart;
};
const addProduct = (userId, idProducto) => {
  const addedProd = cartsModelo.postProduct(userId, idProducto);
  return addProduct;
};

module.exports = {
  getAllCarts,
  getOneCart,
};

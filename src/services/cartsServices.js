const cartsModelo = require("../database/cartsModelo.js");

const getAllCarts = () => {
  const carritos = cartsModelo.getAll();
  return carritos;
};
const delProduct = (userId, idProduct) => {
  const deletedProduct = cartsModelo.deleteProd(userId, idProduct);
  return deletedProduct;
};
const getOneCart = (id) => {
  const oneCart = cartsModelo.getCart(id);
  return oneCart;
};
const addProduct = (userId, idProducto) => {
  const addedProduct = cartsModelo.postProduct(userId, idProducto);
  return addedProduct;
};

module.exports = {
  getAllCarts,
  getOneCart,
  addProduct,
  delProduct,
};

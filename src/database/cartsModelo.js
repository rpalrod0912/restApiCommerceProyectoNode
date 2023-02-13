const datos = require("./carrito.json");
const fs = require("fs");

const getAll = () => {
  return datos.carritos;
};

const getCart = (id) => {
  var cartById = datos.carritos.find((objeto) => {
    return objeto.userId === id;
  });
  return cartById;
};

module.exports = {
  getAll,
  getCart,
};

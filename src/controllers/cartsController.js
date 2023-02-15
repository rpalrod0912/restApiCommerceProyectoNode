const cartsServices = require("../services/cartsServices");

const getAllCarts = (req, res, next) => {
  const carts = cartsServices.getAllCarts();
  if (!carts) {
    res.status(404).send("NO HAY CARROS");
    return;
  }

  res.send(carts);
};

const deleteProduct = (req, res, next) => {
  const { userId, idProduct } = req.body;
  console.log(userId);
  const eliminado = cartsServices.delProduct(userId, idProduct);
  if (!eliminado) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(eliminado);
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

const insertProduct = (req, res, next) => {
  const { userId, idProduct } = req.body;
  console.log(userId);
  const añadido = cartsServices.addProduct(userId, idProduct);
  if (!añadido) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(añadido);
};

module.exports = {
  getAllCarts,
  getCart,
  insertProduct,
  deleteProduct,
};

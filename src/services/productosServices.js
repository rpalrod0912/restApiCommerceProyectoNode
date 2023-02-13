const productosModelo = require("../database/productosModelo");
const { v1: uuid } = require("uuid");

//LOGICA DE NEGOCIO

const getAllProduct = () => {
  const productos = productosModelo.getAllProduct();
  return productos;
};

const getProductsPage = () => {
  const pages = productosModelo.getWebPages();
  return pages;
};

const getColorsProducts = () => {
  const colorsProducts = productosModelo.getColorOrderProducts();
  return colorsProducts;
};

const getProdByPage = (page) => {
  const pagedProducts = productosModelo.getPagedOrderProducts(page);
  return pagedProducts;
};

const getSaleProducts = () => {
  const saleProducts = productosModelo.getSaleProducts();
  return saleProducts;
};

const getSizesProducts = () => {
  const sizesProducts = productosModelo.getSizeOrderProducts();
  return sizesProducts;
};

const insertOneProduct = (nombre, precio) => {
  const idProducto = uuid();
  const fecha_alta = new Date().toLocaleDateString();
  let fecha_cad = new Date();
  fecha_cad.setFullYear(fecha_cad.getFullYear() + 2);
  fecha_cad = fecha_cad.toLocaleDateString();

  const newProduct = {
    nombre,
    precio,
    idProducto,
    fecha_alta,
    fecha_cad,
  };

  //COMPROBAMOS SI ESE PRODUCTO EXISTE EN LA BDD
  if (productosModelo.getOneProduct(newProduct.nombreProducto)) {
    return false;
  }

  const insertedProduct = productosModelo.insertOneProduct(newProduct);
  return insertedProduct;
};

const getOneProduct = (id) => {
  const oneProduct = productosModelo.getOneProduct(id);

  return oneProduct;
};
const deleteOneProduct = () => {};
const updateOneProduct = () => {};

module.exports = {
  getAllProduct,
  insertOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
  getSaleProducts,
  getColorsProducts,
  getProdByPage,
  getSizesProducts,
  getProductsPage,
};

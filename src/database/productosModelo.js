const datos = require("./productos.json");
const fs = require("fs");

const getAllProduct = () => {
  const arrInmutable = datos.productos;
  console.log(arrInmutable);
  return datos.productos;
};

const getColorOrderProducts = () => {
  let colorsArr = {
    Blanco: datos.productos.filter((objeto) => {
      return objeto.color.includes("Blanco");
    }),
    Negro: datos.productos.filter((objeto) => {
      return objeto.color.includes("Negro");
    }),
    Azul: datos.productos.filter((objeto) => {
      return objeto.color.includes("Azul");
    }),
    Rojo: datos.productos.filter((objeto) => {
      return objeto.color.includes("Rojo");
    }),
    Verde: datos.productos.filter((objeto) => {
      return objeto.color.includes("Verde");
    }),
  };
  return colorsArr;
};

const getOneProduct = (nombreProducto) => {
  return datos.productos[nombreProducto];
};

const getSaleProducts = () => {
  const arrFiltrado = datos.productos.filter((objeto) =>
    objeto.hasOwnProperty("oferta")
  );
  return arrFiltrado;
};

const insertOneProduct = (newProduct) => {
  datos.productos[newProduct.nombre] = newProduct;

  //Escribo el producto nuevo en el fichero JSON
  fs.writeFile(
    "./src/database/productos.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL ESCRIBIR");
    }
  );

  return newProduct;
};

module.exports = {
  getAllProduct,
  getOneProduct,
  insertOneProduct,
  getSaleProducts,
  getColorOrderProducts,
};

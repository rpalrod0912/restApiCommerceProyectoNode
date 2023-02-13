const datos = require("./productos.json");
const fs = require("fs");

const getAllProduct = () => {
  const arrInmutable = datos.productos;
  console.log(arrInmutable);
  return datos.productos;
};

const getWebPages = () => {
  let endIndex = 12;
  const arrPages = {
    1: datos.productos.slice(0, endIndex),
    2: datos.productos.slice(13, 13 + endIndex),
    3: datos.productos.slice(25, 25 + endIndex),
  };
  return arrPages;
};

const getPagedOrderProducts = (page) => {
  const objetoPagina = getWebPages()[page];
  return objetoPagina;
};

const getSizeOrderProducts = () => {
  let tallasArr = {
    35: datos.productos.filter((objeto) => {
      return objeto.talla.includes(35);
    }),
    36: datos.productos.filter((objeto) => {
      return objeto.talla.includes(36);
    }),
    37: datos.productos.filter((objeto) => {
      return objeto.talla.includes(37);
    }),
    38: datos.productos.filter((objeto) => {
      return objeto.talla.includes(38);
    }),
    39: datos.productos.filter((objeto) => {
      return objeto.talla.includes(39);
    }),
    40: datos.productos.filter((objeto) => {
      return objeto.talla.includes(40);
    }),
    41: datos.productos.filter((objeto) => {
      return objeto.talla.includes(41);
    }),
    42: datos.productos.filter((objeto) => {
      return objeto.talla.includes(42);
    }),
    43: datos.productos.filter((objeto) => {
      return objeto.talla.includes(43);
    }),
    44: datos.productos.filter((objeto) => {
      return objeto.talla.includes(44);
    }),
    45: datos.productos.filter((objeto) => {
      return objeto.talla.includes(45);
    }),
    46: datos.productos.filter((objeto) => {
      return objeto.talla.includes(46);
    }),
    47: datos.productos.filter((objeto) => {
      return objeto.talla.includes(47);
    }),
    48: datos.productos.filter((objeto) => {
      return objeto.talla.includes(48);
    }),
    S: datos.productos.filter((objeto) => {
      return objeto.talla.includes("S");
    }),
    M: datos.productos.filter((objeto) => {
      return objeto.talla.includes("M");
    }),
    L: datos.productos.filter((objeto) => {
      return objeto.talla.includes("L");
    }),
    XL: datos.productos.filter((objeto) => {
      return objeto.talla.includes("XL");
    }),
  };
  return tallasArr;
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

const getOneProduct = (id) => {
  var userById = datos.productos.find((objeto) => {
    return objeto.id === id;
  });
  return userById;
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
  getSizeOrderProducts,
  getPagedOrderProducts,
  getWebPages,
};

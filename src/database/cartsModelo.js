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

const deleteProd = (userId, idProducto) => {
  const datosCarrito = {
    userId,
    idProducto,
  };
  const userIndex = datos.carritos.findIndex((usuario) => {
    return usuario.userId === userId;
  });
  const cestaUsuario = datos.carritos[userIndex].cesta;

  const indiceProducto = cestaUsuario.findIndex((producto) => {
    return producto.idProducto === idProducto;
  });
  if (indiceProducto !== -1) {
    datos.carritos[userIndex].cesta.splice(indiceProducto, 1);
    fs.writeFile(
      "./src/database/carrito.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL AÑADIR PRODUCTO");
      }
    );
    return datos.carritos[userIndex];
  }
};

const postProduct = (userId, idProducto) => {
  const datosCarrito = {
    userId,
    idProducto,
  };
  console.log(datosCarrito);
  const userIndex = datos.carritos.findIndex((usuario) => {
    return usuario.userId === userId;
  });

  const cestaUsuario = datos.carritos[userIndex].cesta;
  const productoExiste = cestaUsuario.findIndex((producto) => {
    return producto.idProducto === idProducto;
  });

  if (userIndex === -1) {
    datos.carritos.push({
      userId,
      cesta: [{ idProducto, cantidad: 1 }],
    });
    fs.writeFile(
      "./src/database/carrito.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL AÑADIR PRODUCTO");
      }
    );
    return datos.carritos[userIndex];
  } else if (productoExiste !== -1) {
    console.log("ANFETAS");

    datos.carritos[userIndex].cesta[productoExiste].cantidad += 1;
    fs.writeFile(
      "./src/database/carrito.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL AÑADIR CANTIDAD");
      }
    );
    return datos.carritos;
  } else if (productoExiste === -1) {
    console.log(datosCarrito.idProducto);
    console.log("HEROINA");
    datos.carritos[userIndex].cesta.push({
      idProducto: datosCarrito.idProducto,
      cantidad: 1,
    });
    fs.writeFile(
      "./src/database/carrito.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL INSERTAR USUARIO");
      }
    );
    return datos.carritos;
  }
};

module.exports = {
  getAll,
  getCart,
  postProduct,
  deleteProd,
};

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

const postProduct = (userId, idProducto) => {
  const datosCarrito = {
    userId,
    idProducto,
  };
  const userIndex = datos.carritos.findIndex((usuario) => {
    return usuario.userId === userId;
  });

  const cestaUsuario = datos.carritos[userIndex].cesta;
  const productoExiste = cestaUsuario.findIndex((producto) => {
    return producto.idProducto === idProducto;
  });

  if (userIndex === -1) {
    datos.carritos.push({
      userId: userId,
      cesta: [{ idProducto: idProducto, cantidad: 1 }],
    });
    fs.writeFile(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL AÑADIR PRODUCTO");
      }
    );
    return datos.carritos[userIndex];
  } else if (productoExiste !== -1) {
    datos.carritos[userIndex].cesta[productoExiste].cantidad += 1;
    fs.writeFile(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL AÑADIR CANTIDAD");
      }
    );
    return datos.carritos;
  } else if (productoExiste === -1) {
    datos.carritos[userIndex].cesta.push({
      idProducto: idProducto,
      cantidad: 1,
    });
    fs.writeFile(
      "./src/database/users.json",
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
};

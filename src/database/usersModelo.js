const datos = require("./users.json");
const fs = require("fs");
const crearCarrito = require("./carrito.json");

const getAllUsers = () => {
  return datos.users;
};

const getOneUser = (idUser) => {
  var userById = datos.users.find((objeto) => {
    return objeto.idUser === idUser;
  });

  return userById;
};

const getLogInUser = (mail) => {
  var userByMail = datos.users.find((objeto) => {
    return objeto.mail === mail;
  });

  console.log(userByMail);
  return userByMail;
};

const oneUserByMail = (mailUser) => {
  console.log(mailUser);
  var userByMail = datos.users.find((objeto) => {
    return objeto.mail === mailUser;
  });

  console.log(userByMail);
  return userByMail;
};

const insertOneUser = (newUser) => {
  console.log(newUser);
  const verifRep = datos.users.find((objeto) => {
    return objeto.mail === newUser.mail;
  });
  if (verifRep === undefined) {
    console.log(verifRep);
    datos.users.push(newUser);
    console.log(newUser);
    crearCarrito.carritos.push({
      userId: newUser.idUser,
      cesta: [],
    });
    fs.writeFile(
      "./src/database/carrito.json",
      JSON.stringify(crearCarrito, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL CREAR CARRITO");
      }
    );
    fs.writeFile(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL INSERTAR USUARIO");
      }
    );
    return newUser;
  } else {
    return "YAEXISTE";
  }
};

const updateOneUser = (idUser, nombre, lastName, mail, pwd) => {
  const userToBeUpdatedIndex = datos.users.findIndex((objeto) => {
    return objeto.idUser === idUser;
  });
  console.log(datos.users[userToBeUpdatedIndex]);
  if (nombre) {
    datos.users[userToBeUpdatedIndex].nombre = nombre;
  }
  console.log(mail);

  if (lastName) {
    datos.users[userToBeUpdatedIndex].lastName = lastName;
  }

  if (mail) {
    datos.users[userToBeUpdatedIndex].mail = mail;
  }

  if (pwd) {
    datos.users[userToBeUpdatedIndex].pwd = pwd;
  }

  fs.writeFile(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL BORRAR USUARIO");
    }
  );
};
const deleteOneUser = (id) => {
  var usuarioDeleted = datos.users.find((objeto) => {
    return objeto.id === id;
  });

  const user = usuarioDeleted;

  const newArr = datos.users.filter(function (item) {
    return item.idUser !== id;
  });
  //BORRAR USUARIO
  datos.users = newArr;

  //console.log(editedData);
  fs.writeFile(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL BORRAR USUARIO");
    }
  );

  return user;
};

module.exports = {
  getAllUsers,
  getOneUser,
  insertOneUser,
  deleteOneUser,
  updateOneUser,
  oneUserByMail,
  getLogInUser,
};

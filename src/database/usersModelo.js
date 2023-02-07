const datos = require("./users.json");
const fs = require("fs");

const getAllUsers = () => {
  return datos.users;
};

const getOneUser = (idUser) => {
  return datos.users[idUser];
};

const insertOneUser = (newUser) => {
  datos.users.push(newUser);
  console.log(newUser);
  fs.writeFile(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL INSERTAR USUARIO");
    }
  );
  return newUser;
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
};

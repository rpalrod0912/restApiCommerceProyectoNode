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

module.exports = {
  getAllUsers,
  getOneUser,
  insertOneUser,
};

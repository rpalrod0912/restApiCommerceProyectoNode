const userModelos = require("../database/usersModelo.js");
const { v1: uuid } = require("uuid");

const getUsers = () => {
  const usuarios = userModelos.getAllUsers();
  return usuarios;
};

const insertUser = (nombre, mail, pwd) => {
  const idUser = uuid();
  const fecha_alta = new Date().toLocaleDateString();

  const nuevoUsuario = {
    idUser,
    nombre,
    mail,
    pwd,
  };

  if (userModelos.getOneUser(nuevoUsuario.idUser)) {
    return false;
  }

  const usuarioInsertado = userModelos.insertOneUser(nuevoUsuario);
  return usuarioInsertado;
};

const getUser = (idUser) => {
  const oneUsuario = userModelos.getOneUser(idUser);
  return oneUsuario;
};

const deleteOneUser = () => {};

const updateOneUser = () => {};

module.exports = {
  getUsers,
  insertUser,
  getUser,
  deleteOneUser,
  updateOneUser,
};

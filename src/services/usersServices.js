const userModelos = require("../database/usersModelo.js");
const { v1: uuid } = require("uuid");

const getUsers = () => {
  const usuarios = userModelos.getAllUsers();
  return usuarios;
};

const getUserLogIn = (mail) => {
  const usuario = userModelos.getLogInUser(mail);
  return usuario;
};

const insertUser = (id, nombre, lastName, mail, pwd) => {
  const fecha_alta = new Date().toLocaleDateString();

  const nuevoUsuario = {
    idUser: id,
    nombre,
    lastName,
    mail,
    pwd,
  };
  console.log(nuevoUsuario);

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

const getUserByMail = (mailUser) => {
  const oneUsuario = userModelos.oneUserByMail(mailUser);
  console.log(oneUsuario);
  return oneUsuario;
};

const deleteOneUser = (id) => {
  console.log(id);
  const user = userModelos.deleteOneUser(id);
  return user;
};

const updateOneUser = (idUser, nombre, lastName, mail, pwd) => {
  console.log(pwd);
  const user = userModelos.updateOneUser(idUser, nombre, lastName, mail, pwd);
  console.log(user);
  return user;
};

module.exports = {
  getUsers,
  insertUser,
  getUser,
  deleteOneUser,
  updateOneUser,
  getUserByMail,
  getUserLogIn,
};

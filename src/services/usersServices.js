const userModelos = require("../database/usersModelo.js");
const { v1: uuid } = require("uuid");

const getUsers = () => {
  const usuarios = userModelos.getAllUsers();
  return usuarios;
};

const getUserLogIn = (mailAndPwd) => {
  const usuario = userModelos.getLogInUser(mailAndPwd);
  return usuario;
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

const updateOneUser = (id, nombre, mail, pwd) => {
  console.log(id);
  console.log(nombre);
  console.log(mail);
  console.log(pwd);
  const user = userModelos.updateOneUser(id, nombre, mail, pwd);
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

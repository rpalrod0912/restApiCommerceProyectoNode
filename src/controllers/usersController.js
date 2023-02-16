const usersServices = require("../services/usersServices");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const accessToken = dotenv.config().parsed.SECRET_TOKEN;

const getAllUsers = (req, res, next) => {
  const allUsers = usersServices.getUsers();
  if (!allUsers) {
    res.status(404).send("NO HAY USUARIOS");
    return;
  }
  res.send(allUsers);
};

const getOneUserLogIn = (req, res, next) => {
  console.log(req.params);
  const { mail } = req.params;

  const oneUser = usersServices.getUserLogIn(mail);
  if (!oneUser) {
    res.send(JSON.stringify("NOTFOUND"));
    return;
  }
  /*
  const keyJWT = jwt.sign(
    { mail: oneUser.mail, pwd: oneUser.pwd },
    accessToken
  );
  oneUser.token = keyJWT;*/
  res.send(oneUser);
};
const insertOneUser = (req, res, next) => {
  const { id, name, lastName, mail, password } = req.body;
  console.log(name);
  console.log(lastName);
  console.log(mail);
  console.log(password);

  if (!id || !name || !mail || !password) {
    res.status(400).send("FALTAN DATOS PORA INSERTAR USUARIIOS");
    return;
  }

  const newUser = usersServices.insertUser(id, name, lastName, mail, password);
  console.log(newUser);
  if (!newUser) {
    res.status(400).send("ENTRADA DUPLICADA");
    return;
  }

  if (newUser === "YAEXISTE") {
    res.send(newUser);
  }
};

const getOneUser = (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);

  const oneUser = usersServices.getUser(id);
  if (!oneUser) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(oneUser);
};
const getOneUserByMail = (req, res, next) => {
  const { mail } = req.params;
  console.log(req.params);

  const oneUser = usersServices.getUserByMail(mail);
  if (!oneUser) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(oneUser);
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  //console.log(id);
  const deletedUser = usersServices.deleteOneUser(id);
  //console.log(deletedUser);
  if (!deletedUser) {
    res.status(404).send("USUARIO NO ENCONTRADO");
    return;
  }
  res.send(deletedUser);
};

const updateUser = (req, res, next) => {
  const { id } = req.params;
  const { nombre, mail, pwd } = req.body;
  console.log(req.body);
  console.log(nombre);
  console.log(mail);
  console.log(pwd);

  const updateUser = usersServices.updateOneUser(id, nombre, mail, pwd);

  res.send(updateUser);
};

module.exports = {
  getAllUsers,
  getOneUserByMail,
  insertOneUser,
  getOneUser,
  deleteUser,
  updateUser,
  getOneUserLogIn,
};

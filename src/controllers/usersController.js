const usersServices = require("../services/usersServices");

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
  const { mailAndPwd } = req.params;
  console.log(mailAndPwd);
  const oneUser = usersServices.getUserLogIn(mailAndPwd);
  if (!oneUser) {
    res.send(JSON.stringify("NOTFOUND"));
    return;
  }
  res.send(oneUser);
};
const insertOneUser = (req, res, next) => {
  console.log(req.body);
  console.log(req.body);

  const { name, email, password } = req.body;
  console.log(name);
  if (!name || !email || !password) {
    res.status(400).send("FALTAN DATOS PORA INSERTAR USUARIIOS");
    return;
  }

  const newUser = usersServices.insertUser(name, email, password);
  if (!newUser) {
    res.status(400).send("ENTRADA DUPLICADA");
    return;
  }

  res.send(newUser);
};

const getOneUser = (req, res, next) => {
  const { mail } = req.params;
  console.log(req.params);

  const oneUser = usersServices.getUser(mail);
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

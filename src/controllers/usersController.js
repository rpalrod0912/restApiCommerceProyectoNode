const usersServices = require("../services/usersServices");

const getAllUsers = (req, res, next) => {
  const allUsers = usersServices.getUsers();
  if (!allUsers) {
    res.status(404).send("NO HAY USUARIOS");
    return;
  }
  res.send(allUsers);
};

const insertOneUser = (req, res, next) => {
  console.log(req.body);
  const { name, email, password } = req.body;
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
  const { usuario } = req.params;

  const oneUser = usersServices.getUser(usuario.id);
  if (!oneUser) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(oneUser);
};

const deleteUser = (req, res, next) => {
  res.send("BORRAR usuario");
};

const updateUser = (req, res, next) => {
  res.send("UPDATED users");
};

module.exports = {
  getAllUsers,
  insertOneUser,
  getOneUser,
  deleteUser,
  updateUser,
};

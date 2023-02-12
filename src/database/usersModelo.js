const datos = require("./users.json");
const fs = require("fs");

const getAllUsers = () => {
  return datos.users;
};

const getOneUser = (idUser) => {
  return datos.users[idUser];
};

const getLogInUser = (mailAndPwd) => {
  const [mail, pwd] = mailAndPwd.split("&");
  const userLogInIndex = datos.users.findIndex((objeto) => {
    return objeto.mail === mail && objeto.pwd === pwd;
  });

  const finalUser = datos.users[userLogInIndex];
  return finalUser;
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
  const verifRep = datos.users.find((objeto) => {
    return objeto.mail === newUser.mail;
  });
  if (verifRep === undefined) {
    console.log(verifRep);
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
  } else {
    return "YAEXISTE";
  }
};

const updateOneUser = (id, name, mail, pwd) => {
  console.log(id);
  const userToBeUpdatedIndex = datos.users.findIndex((objeto) => {
    return objeto.idUser === id;
  });
  console.log(name);
  console.log(datos.users[userToBeUpdatedIndex]);
  if (name) {
    datos.users[userToBeUpdatedIndex].nombre = name;
  }
  console.log(mail);

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

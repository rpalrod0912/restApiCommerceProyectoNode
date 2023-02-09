const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
// /users/:id
router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.insertOneUser);

router
  .route("/:id")
  /*
  .get(usersController.getOneUser)*/
  .delete(usersController.deleteUser)
  .patch(usersController.updateUser);

router.route("/:mail").get(usersController.getOneUserByMail);

module.exports.router = router;

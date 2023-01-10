const express = require("express");

const userRouter = express.Router();
const authenticationUser = require("../middlewares/authenticationUser");

const userController = require("../controllers/userController");
const checkEmail = require("../middlewares/checkEmail");
const emailValidator = require("../middlewares/Validator");

userRouter.post("/login", userController.login);
userRouter.get("/", authenticationUser, userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post(
  "/createprofile",
  checkEmail,
  emailValidator,
  userController.createUser
);

module.exports = userRouter;

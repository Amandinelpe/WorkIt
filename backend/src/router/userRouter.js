const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userController");
const checkEmail = require("../middlewares/checkEmail");
const emailValidator = require("../middlewares/Validator");

userRouter.post("/login", userController.login);
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post(
  "/createprofile",
  checkEmail,
  emailValidator,
  userController.createUser
);

userRouter.put("/:id", userController.updateUser);
userRouter.put("/resetPassword", userController.resetPassword);
userRouter.put("/changePassword/:id", userController.updatePassword);
userRouter.post("/checkToken", userController.verifyToken);

module.exports = userRouter;

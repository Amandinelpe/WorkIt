const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userController");
const checkEmail = require("../middlewares/checkEmail");

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", checkEmail, userController.createUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;

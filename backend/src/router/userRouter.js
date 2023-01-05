const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userController");
const checkEmail = require("../middlewares/checkEmail");

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/createprofile", checkEmail, userController.createUser);

module.exports = userRouter;

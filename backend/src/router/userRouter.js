const express = require("express");

const userRouter = express.Router();

const userControler = require("../controllers/userController");

userRouter.get("/", userControler.getAllUsers);
userRouter.get("/:id", userControler.getUserById);
/* userRouter.post("/", userControler.createUser); */

module.exports = userRouter;

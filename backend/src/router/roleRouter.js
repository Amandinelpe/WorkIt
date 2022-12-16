const express = require("express");

const roleRouter = express.Router();

const roleController = require("../controllers/adminController");

roleRouter.get("/", roleController.getAllRoles);
roleRouter.get("/:id", roleController.getRoleById);
/* userRouter.post("/", userControler.createUser); */

module.exports = roleRouter;

const express = require("express");

const adminRouter = express.Router();

const adminController = require("../controllers/adminController");

adminRouter.get("/", adminController.getAllAdmins);
adminRouter.get("/:id", adminController.getAdminById);
/* userRouter.post("/", userControler.createUser); */

module.exports = adminRouter;

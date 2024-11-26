import express from "express";
import UserController from "./user.controller.js";
const userRouter = express.Router();
const userController = new UserController();
userRouter.post("/register", (req, res, next) => {
  userController.register(req, res, next);
});
userRouter.post("/login", (req, res, next) => {
  userController.login(req, res, next);
});
export default userRouter;

import express from "express";
import ResourceController from "./resource.controller.js";
import authorize from "../../middlewares/authorize.middleware.js";
const resourceRouter = express.Router();
const resourceController = new ResourceController();
resourceRouter.get("/admin", authorize(["admin"]), (req, res, next) => {
  resourceController.getAdminResource(req, res, next);
});
resourceRouter.get(
  "/moderator",
  authorize(["admin", "moderator"]),
  (req, res, next) => {
    resourceController.getModeratorResource(req, res, next);
  }
);
resourceRouter.get(
  "/user",
  authorize(["admin", "moderator", "user"]),
  (req, res, next) => {
    resourceController.getUserResource(req, res, next);
  }
);
export default resourceRouter;

const { Router } = require("express");
const authMiddleware = require("../../App/Middlewares/auth");

const { UserDetailsController } = require("../../App/Controllers");

const routes = Router();

routes.get("/bio", authMiddleware, UserDetailsController.getUserBioDetails);
routes.post("/bio", authMiddleware, UserDetailsController.create);
routes.put("/bio/:id", authMiddleware, UserDetailsController.update);
routes.delete("/bio/:id", authMiddleware, UserDetailsController.delete);

module.exports = routes;

const { Router } = require("express");
const authMiddleware = require("../App/Middlewares/auth");
// const schemaValidator = require("../App/Middlewares/schemaValidator");

const { UserDetailsController } = require("../App/Controllers");
// const { userSchema } = require("../Schemas");

const routes = Router();

routes.get("/bio", authMiddleware, UserDetailsController.getUserBioDetails);
routes.post("/bio", authMiddleware, UserDetailsController.create);
routes.put("/bio/:id", authMiddleware, UserDetailsController.update);
routes.delete("/bio/:id", authMiddleware, UserDetailsController.delete);

module.exports = routes;

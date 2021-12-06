const { Router } = require("express");
const authMiddleware = require("../../App/Middlewares/auth");
const schemaValidator = require("../../App/Middlewares/schemaValidator");

const { UserController } = require("../../App/Controllers");
const { userSchema } = require("../../Schemas");

const routes = Router();

routes.get("/", authMiddleware, UserController.getAllUsers);
routes.get("/properties", authMiddleware, UserController.getUserDetails);
routes.post("/new", schemaValidator(userSchema), UserController.create);
// routes.put(
//   "/update/:id",
//   authMiddleware,
//   // schemaValidator(userSchema),
//   UserController.update
// );

routes.delete("/:id", authMiddleware, UserController.delete);

module.exports = routes;

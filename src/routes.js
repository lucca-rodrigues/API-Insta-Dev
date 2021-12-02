const { Router } = require("express");
const routes = new Router();

const schemaValidator = require("./App/Middlewares/schemaValidator");
const authMiddleware = require("./App/Middlewares/auth");

const userSchema = require("./Schemas/CreateUserSchema");
const authSchema = require("./Schemas/AuthSchema");

const UserController = require("./App/Controllers/UserController");
const UserDetailsController = require("./App/Controllers/UserDetailsController");
const AuthController = require("./App/Controllers/AuthController");

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
// Create user
routes.post("/users", schemaValidator(userSchema), UserController.create);

routes.post("/auth", schemaValidator(authSchema), AuthController.authenticate);

routes.use(authMiddleware);
routes.get("/users", UserController.getAllUsers);

routes.get("/users/details", UserDetailsController.getDetails);
routes.get("/users/details/:id", UserDetailsController.getDetailsById);
routes.post("/users/details/:id", UserDetailsController.create);

module.exports = routes;

const { Router } = require("express");
const routes = new Router();

const schemaValidator = require("./App/Middlewares/schemaValidator");
const userSchema = require("./Schemas/CreateUserSchema");

const UserController = require("./App/Controllers/UserController");
const UserDetailsController = require("./App/Controllers/UserDetailsController");
const AuthController = require("./App/Controllers/AuthController");

// Create user
routes.get("/users", UserController.getAllUsers);
routes.post("/users", schemaValidator(userSchema), UserController.create);

routes.post("/auth", AuthController.authenticate);
// Details
routes.get("/users/details", UserDetailsController.getDetails);
routes.get("/users/details/:id", UserDetailsController.getDetailsById);
routes.post("/users/details/:id", UserDetailsController.create);

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

module.exports = routes;

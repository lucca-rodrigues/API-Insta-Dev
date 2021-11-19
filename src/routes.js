const { Router } = require("express");

const routes = new Router();

const UserController = require("./App/Controllers/UserController");
const UserDetailsController = require("./App/Controllers/UserDetailsController");

// Create user
routes.get("/users", UserController.getAllUsers);
routes.post("/users", UserController.store);

// Details
routes.get("/users/details/:id", UserDetailsController.getDetails);
routes.post("/users/details/:id", UserDetailsController.create);

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

module.exports = routes;

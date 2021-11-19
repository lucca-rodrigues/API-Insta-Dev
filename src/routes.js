const { Router } = require("express");

const routes = new Router();

const UserController = require("./App/Controllers/UserController");

// Create user
routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);

// User Details
routes.get("/users/details", UserController.show);
routes.put("/users/details/:id", UserController.update);

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

module.exports = routes;

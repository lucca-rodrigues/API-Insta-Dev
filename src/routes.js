const { Router } = require("express");

const routes = new Router();

const UserController = require("./App/Controllers/UserController");
const UserDetailsController = require("./App/Controllers/UserDetailsController");

// Create user
routes.get("/users", UserController.getAllUsers);
routes.post("/users", UserController.store);

// Details
routes.get("/users/details", UserDetailsController.getDetails);
routes.post("/users/details/:id", UserDetailsController.create);

// routes.get("/users/:id", UserController.show);

// // User Details
// routes.get("/users/details", UserController.show);
// routes.put("/users/details/:id", UserController.update);

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

module.exports = routes;

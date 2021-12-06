const { Router } = require("express");
const usersRoute = require("./users.routes");
const usersBio = require("./userDetails.routes");

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
routes.use("/users", usersRoute);
routes.use("/users", usersBio);

module.exports = routes;

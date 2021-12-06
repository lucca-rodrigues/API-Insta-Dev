const { Router } = require("express");
const usersRoute = require("./users.routes");

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
routes.use("/users", usersRoute);

module.exports = routes;

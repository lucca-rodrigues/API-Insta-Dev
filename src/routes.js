const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.send({ message: "API Started, ok!" });
});

module.exports = routes;

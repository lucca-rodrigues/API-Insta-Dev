const { Router } = require("express");

const { AuthController } = require("../App/Controllers");

const routes = Router();

routes.post("/", AuthController.authenticate);

module.exports = routes;

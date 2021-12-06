const { Router } = require("express");
const authMiddleware = require("../App/Middlewares/auth");

const { LikeController } = require("../App/Controllers");

const routes = Router();

routes.post("/liked/:id", authMiddleware, LikeController.addLike);
routes.put("/unlike/:id", authMiddleware, LikeController.removeLike);

module.exports = routes;

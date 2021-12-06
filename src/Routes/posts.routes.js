const { Router } = require("express");
const authMiddleware = require("../App/Middlewares/auth");

const { PostController } = require("../App/Controllers");
const schemaValidator = require("../App/Middlewares/schemaValidator");
const { postSchema } = require("../Schemas");

const routes = Router();

routes.post(
  "/new",
  authMiddleware,
  schemaValidator(postSchema),
  PostController.create
);
routes.get("/", PostController.getAllPosts);
routes.get("/user", authMiddleware, PostController.getPostsByUser);
routes.put("/user/:id", authMiddleware, PostController.update);
routes.delete("/user/:id", authMiddleware, PostController.delete);

module.exports = routes;

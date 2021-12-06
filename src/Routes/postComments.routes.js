const { Router } = require("express");
const authMiddleware = require("../App/Middlewares/auth");

const { CommentController } = require("../App/Controllers");
const schemaValidator = require("../App/Middlewares/schemaValidator");
const { commentSchema } = require("../Schemas");

const routes = Router();

routes.get("/", authMiddleware, CommentController.getAllComments);
routes.get("/posts/:id", authMiddleware, CommentController.getCommentsByPostId);
routes.post(
  "/new/:id",
  authMiddleware,
  schemaValidator(commentSchema),
  CommentController.create
);
routes.put(
  "/posts/:id",
  authMiddleware,
  schemaValidator(commentSchema),
  CommentController.update
);
routes.delete("/posts/:id", authMiddleware, CommentController.delete);

module.exports = routes;

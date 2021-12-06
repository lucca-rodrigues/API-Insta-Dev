const { Router } = require("express");
const authMiddleware = require("../App/Middlewares/auth");

const { CommentController } = require("../App/Controllers");
const schemaValidator = require("../App/Middlewares/schemaValidator");
const { commentSchema } = require("../Schemas");

const routes = Router();

routes.get("/", CommentController.getAllComments);
routes.get("/posts/:id", CommentController.getCommentsById);
routes.post(
  "/new/:id",
  schemaValidator(commentSchema),
  CommentController.create
);
routes.put(
  "/posts/:id",
  schemaValidator(commentSchema),
  CommentController.update
);
routes.delete("/posts/:id", CommentController.delete);

module.exports = routes;

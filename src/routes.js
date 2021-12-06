const { Router } = require("express");
const routes = new Router();

const schemaValidator = require("./App/Middlewares/schemaValidator");
const authMiddleware = require("./App/Middlewares/auth");

const userSchema = require("./Schemas/CreateUserSchema");
const authSchema = require("./Schemas/AuthSchema");
const postSchema = require("./Schemas/CreatePostSchema");
const commentSchema = require("./Schemas/CreateCommentSchema");

const UserController = require("./App/Controllers/UserController");
const UserDetailsController = require("./App/Controllers/UserDetailsController");
const AuthController = require("./App/Controllers/AuthController");
const { upload } = require("./Config/Multer");
const FileController = require("./App/Controllers/FileController");
const PostController = require("./App/Controllers/PostController");
const LikeController = require("./App/Controllers/LikeController");
const CommentController = require("./App/Controllers/CommentController");

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
// Create user
routes.post("/auth", schemaValidator(authSchema), AuthController.authenticate);
routes.post("/users/new", schemaValidator(userSchema), UserController.create);
routes.get("/posts", PostController.getAllPosts);

routes.use(authMiddleware);
routes.get("/users", UserController.getAllUsers);
routes.get("/users/properties", UserController.getUserDetails);
routes.delete("/users/:id", UserController.delete);

routes.get("/users/bio", UserDetailsController.getUserBioDetails);
routes.post("/users/bio", UserDetailsController.create);
routes.put("/users/bio/:id", UserDetailsController.update);
routes.delete("/users/bio/:id", UserDetailsController.delete);

routes.post("/posts/new", schemaValidator(postSchema), PostController.create);
routes.get("/posts/user", PostController.getPostsByUser);
routes.put("/posts/user/:id", PostController.update);
routes.delete("/posts/user/:id", PostController.delete);

routes.post("/posts/liked/:id", LikeController.addLike);
routes.put("/posts/unlike/:id", LikeController.removeLike);

routes.get("/comments", CommentController.getAllComments);
routes.post(
  "/comments/new/:id",
  schemaValidator(commentSchema),
  CommentController.create
);
routes.put(
  "/comments/posts/:id",
  schemaValidator(commentSchema),
  CommentController.update
);
routes.delete("/comments/posts/:id", CommentController.delete);

routes.post("/upload", upload.single("image"), FileController.upload);

module.exports = routes;

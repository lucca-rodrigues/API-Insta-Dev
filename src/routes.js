const { Router } = require("express");
const routes = new Router();

const schemaValidator = require("./App/Middlewares/schemaValidator");
const authMiddleware = require("./App/Middlewares/auth");

const userSchema = require("./Schemas/CreateUserSchema");
const authSchema = require("./Schemas/AuthSchema");

const UserController = require("./App/Controllers/UserController");
const UserDetailsController = require("./App/Controllers/UserDetailsController");
const AuthController = require("./App/Controllers/AuthController");
const { upload } = require("./Config/Multer");
const FileController = require("./App/Controllers/FileController");
const PostController = require("./App/Controllers/PostController");
const LikeController = require("./App/Controllers/LikeController");

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
// Create user
routes.post("/auth", schemaValidator(authSchema), AuthController.authenticate);
routes.post("/users/new", schemaValidator(userSchema), UserController.create);
routes.get("/posts", PostController.getPosts);

routes.use(authMiddleware);
routes.get("/users", UserController.getAllUsers);
routes.get("/users/properties", UserController.getUser);
routes.delete("/users/:id", UserController.delete);

routes.get("/users/bio", UserDetailsController.getDetails);
routes.post("/users/bio", UserDetailsController.create);
routes.put("/users/bio", UserDetailsController.update);
routes.delete("/users/bio/:id", UserDetailsController.delete);

routes.post("/posts/new", PostController.create);
routes.get("/posts/user", PostController.getPostsByUser);
routes.put("/posts/user", PostController.getPostsByUser);

routes.post("/posts/like/:id", LikeController.addLike);

routes.post("/upload", upload.single("image"), FileController.upload);

module.exports = routes;

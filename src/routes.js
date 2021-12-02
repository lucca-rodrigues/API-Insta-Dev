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

routes.get("/users/details", UserDetailsController.getDetails);
routes.post("/users/details", UserDetailsController.create);

routes.post("/upload", upload.single("image"), FileController.upload);

routes.post("/posts/new", PostController.create);

module.exports = routes;

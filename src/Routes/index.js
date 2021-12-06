const { Router } = require("express");
const authentication = require("./authentication.routes");
const usersRoute = require("./users.routes");
const usersBio = require("./userDetails.routes");
const posts = require("./posts.routes");
const postsLike = require("./likes.routes");
const postComments = require("./postComments.routes");
const uploadFiles = require("./uploadFiles.routes");

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Ok, api started" });
});
routes.use("/auth", authentication);
routes.use("/users", usersRoute);
routes.use("/users", usersBio);
routes.use("/posts", posts);
routes.use("/posts", postsLike);
routes.use("/comments", postComments);
routes.use("/upload", uploadFiles);

module.exports = routes;

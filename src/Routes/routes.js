const { Router } = require("express");

const authentication = require("./Authentication");
const usersRoute = require("./Users");
const usersBio = require("./UserDetailsBio");
const posts = require("./Posts");
const postsLike = require("./PostLikes");
const postComments = require("./PostComments");
const uploadFiles = require("./UploadFiles");

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

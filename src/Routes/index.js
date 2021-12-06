const { Router } = require("express");
const usersRoute = require("./users.routes");
const usersBio = require("./userDetails.routes");
const postsLike = require("./userDetails.routes");
const postComments = require("./postComments.routes");

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
routes.use("/users", usersRoute);
routes.use("/users", usersBio);
routes.use("/posts", postsLike);
routes.use("/comments", postComments);

module.exports = routes;

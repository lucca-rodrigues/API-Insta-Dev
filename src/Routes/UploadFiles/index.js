const { Router } = require("express");
const authMiddleware = require("../../App/Middlewares/auth");

const { FileController } = require("../../App/Controllers");
const { upload } = require("../../Config/Multer");

const routes = Router();

routes.post("/", upload.single("image"), authMiddleware, FileController.create);

module.exports = routes;

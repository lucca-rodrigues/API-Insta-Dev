require("dotenv").config();

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const cors = require("cors");

const app = express();

require("./App/Database");

const routes = require("./Routes/routes");

app.use(cors);
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(3333);

const express = require("express");

const app = express();

require("./App/Database");

const routes = require("./routes");

app.use(express.json());

app.use(routes);

app.listen(3333);

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

require("./App/Database");

const routes = require("./routes");

app.use(cors);
app.use(express.json());

app.use(routes);

app.listen(3333);

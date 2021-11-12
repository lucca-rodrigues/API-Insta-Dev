require('dotenv').config();
require('./Database');

const PORT = process.env.PORT || 3000;

const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

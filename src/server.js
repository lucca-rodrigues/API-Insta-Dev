require('dotenv').config();
require('./Database/index');

const PORT = process.env.PORT || 3000;

const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

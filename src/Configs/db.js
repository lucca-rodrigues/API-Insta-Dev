const Sequelize = require('sequelize');

const user = process.env.DB_USERNAME;
const database = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dialect = process.env.DIALECT;

const connection = new Sequelize(database, user, password, {
  host,
  port,
  dialect,
});

module.exports = { connection };

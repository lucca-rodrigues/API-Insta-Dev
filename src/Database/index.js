const Sequelize = require('sequelize');

const databaseConfig = require('../Configs/db');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
  }
}

module.exports = new Database();

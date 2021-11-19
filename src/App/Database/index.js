const Sequelize = require("sequelize");

const User = require("../Models/User");
const UserDetails = require("../Models/UserDetails");

const databaseConfig = require("../../Config/database");

const models = [User, UserDetails];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();

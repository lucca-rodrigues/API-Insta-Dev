// const Sequelize = require('sequelize');
// const { connection } = require('../Configs/Database');

// const data = new Sequelize(connection);
// const connectionDatabase = data
//   .authenticate()
//   .then(() => {
//     console.log('Conectado ao banco!');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// module.exports = { connectionDatabase };
const Sequelize = require('sequelize');
const { connection } = require('../Configs/Database');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(connection);
  }
}

module.exports = new Database();

// const Sequelize = require('sequelize');

// const user = process.env.DB_USERNAME;
// const database = process.env.DB_NAME;
// const password = process.env.DB_PASSWORD;

// const host = process.env.DB_HOST;
// const port = process.env.DB_PORT;
// // const dialect = process.env.DIALECT;
// const DIALECT = 'postgres';

// console.log('DIALECT', DIALECT);

// const connection = new Sequelize(database, user, password, {
//   dialect: DIALECT,
//   host,
//   port,
// });

// module.exports = { connection };

module.exports = {
  dialect: 'postgresql',
  host: 'localhost',
  username: 'docker',
  password: 'root',
  database: 'insta',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

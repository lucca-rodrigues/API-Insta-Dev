const { connection } = require('../Configs/db');

const connectionDatabase = connection
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco!');
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = { connectionDatabase };

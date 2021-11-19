module.exports = {
  username: "docker",
  password: "root",
  database: "insta",
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
};

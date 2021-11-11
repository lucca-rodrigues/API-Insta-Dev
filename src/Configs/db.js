module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.USERNAME || 'postgres',
  password: process.env.PASSWORD || 'postgres',
  database: process.env.DATABASE || 'postgres',
  port: process.env.PORT || 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

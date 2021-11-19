"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // username: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      //   unique: true,
      // },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // username: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      //   unique: true,
      // },
      // avatar: {
      //   type: Sequelize.STRING,
      //   allowNull: true,
      // },
      // bio: {
      //   type: Sequelize.STRING,
      // },
      // gender: {
      //   type: Sequelize.STRING,
      // },
      // password_hash: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};

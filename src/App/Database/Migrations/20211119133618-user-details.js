"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_details", {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bio: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      // password_hash: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user_details");
  },
};

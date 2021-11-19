"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_details", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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

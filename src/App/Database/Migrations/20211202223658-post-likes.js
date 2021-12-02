"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("post_likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      liked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      users_liked: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("post_likes");
  },
};

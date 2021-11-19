// const Sequelize = require("sequelize");

const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class UserDetails extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        username: Sequelize.STRING,
        avatar: Sequelize.STRING,
        bio: Sequelize.STRING,
        gender: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "user_details",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "users" });
  }
}

module.exports = UserDetails;

// const Sequelize = require("sequelize");

const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class UserDetails extends Model {
  static init(sequelize) {
    super.init(
      {
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
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = UserDetails;
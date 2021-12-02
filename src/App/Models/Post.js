const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class UserDetails extends Model {
  static init(sequelize) {
    super.init(
      {
        author_id: Sequelize.INTEGER,
        image: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "posts",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "author_id", as: "user" });
  }
}

module.exports = UserDetails;

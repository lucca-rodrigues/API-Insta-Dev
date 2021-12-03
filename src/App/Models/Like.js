const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Like extends Model {
  static init(sequelize) {
    super.init(
      {
        post_id: Sequelize.INTEGER,
        liked: Sequelize.BOOLEAN,
        users_liked: Sequelize.ARRAY(Sequelize.INTEGER),
        likes: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: "post_likes",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.UserDetails, {
      foreignKey: "user_id",
      as: "user_details",
    });
  }
}

module.exports = Like;

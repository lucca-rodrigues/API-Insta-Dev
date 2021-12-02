const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class UserDetails extends Model {
  static init(sequelize) {
    super.init(
      {
        post_id: Sequelize.INTEGER,
        liked: Sequelize.BOOLEAN,
        users_liked: Sequelize.ARRAY(Sequelize.INTEGER),
        likes: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "post_likes",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.Post, { foreignKey: "post_id", as: "posts" });
    this.hasMany(models.User, {
      foreignKey: "id",
      as: "users",
    });
  }
}

module.exports = UserDetails;

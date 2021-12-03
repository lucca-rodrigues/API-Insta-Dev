const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Like extends Model {
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

  // static associate(models) {
  //   this.belongsTo(models.Post, { foreignKey: "post_id", as: "posts" });
  // }
}

module.exports = Like;

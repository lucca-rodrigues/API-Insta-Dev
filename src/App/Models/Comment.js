const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        post_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        user_name: Sequelize.STRING,
        comment: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "post_comments",
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.Post, { foreignKey: "id", as: "posts" });
  // }
}

module.exports = Comment;

const Comment = require("../Models/Comment");
const Post = require("../Models/Post");
const User = require("../Models/User");

class CommentController {
  async create(req, res) {
    try {
      console.log("req:", req.name);
      const comment = await Comment.create({
        post_id: req.user_id,
        user_id: req.params.id,
        user_name: req.name,
        comment: req.body.comment,
      });

      if (!comment) {
        return res.status(400).json({ error: "Comment not created" });
      }

      return res.status(200).json(comment);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    // const user = await User.findAll({
    //   where: {
    //     id: userId,
    //     // raw: true,
    //     // raw: true,
    //     // // rejectOnEmpty: true,
    //   },
    // });

    // try {
    //   return res.status(200).json(user);
    // } catch (error) {
    //   return res.status(400).json({ error: error });
    // }

    // const comments = await Comment.findAll({
    //   where: {
    //     post_id: postId,
    //   },
    // });

    // if (!comments) {
    //   return res.status(400).json({ error: "Comments not found" });
    // }
    // return res.status(200).json(comments);
    // if (user) {
    // const comment = await comments.create({
    //   post_id: postId,
    //   user_id: userId,
    //   user_name: "João",
    //   comment: req.body.comment,
    // });

    //   try {
    //     return res.status(200).json(comment);
    //   } catch (error) {
    //     return res.status(400).json({ error: error });
    //   }
    // }
  }

  async getAllComments(req, res) {
    try {
      const comments = await Comment.findAll();

      if (!comments) {
        return res.status(400).json({ error: "Comments not found" });
      }
      return res.status(200).json(comments);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CommentController();

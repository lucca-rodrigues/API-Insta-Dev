const Comment = require("../Models/Comment");
const Post = require("../Models/Post");
const User = require("../Models/User");

class CommentController {
  async create(req, res) {
    try {
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

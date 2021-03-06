const Comment = require("../Models/Comment");
class CommentController {
  async create(req, res) {
    try {
      const comment = await Comment.create({
        post_id: req.params.id,
        user_id: req.user_id,
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
      const comments = await Comment.findAll({
        order: [["created_at", "DESC"]],
      });

      if (!comments) {
        return res.status(400).json({ error: "Comments not found" });
      }
      return res.status(200).json(comments);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getCommentsByPostId(req, res) {
    try {
      const comments = await Comment.findAll({
        order: [["created_at", "DESC"]],

        where: {
          post_id: req.params.id,
        },
        attributes: [
          "id",
          "post_id",
          "user_id",
          "user_name",
          "comment",
          "createdAt",
        ],
      });

      if (!comments) {
        return res.status(400).json({ error: "Comments not found" });
      }
      return res.status(200).json(comments);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    const userId = req.user_id;
    const commentId = req.params.id;

    const comment = await Comment.findOne({
      where: {
        id: commentId,
        user_id: userId,
      },
    });

    if (!comment) {
      return res.status(400).json({ error: "Comment not found" });
    }
    try {
      const commentUpdated = await comment.update({
        comment: req.body.comment,
      });
      return res.status(200).json(commentUpdated);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const commentId = req.params.id;

    try {
      const deletedComment = await Comment.destroy({
        where: {
          id: commentId,
        },
      });

      if (!deletedComment) {
        return res.status(400).json({ error: "Comment not already exists" });
      }
      return res.status(200).json({ message: "Comment deleted" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CommentController();

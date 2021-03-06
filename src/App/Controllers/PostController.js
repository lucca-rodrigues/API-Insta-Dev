const User = require("../Models/User");
const Post = require("../Models/Post");
const Like = require("../Models/Like");
const Comment = require("../Models/Comment");

class PostController {
  async create(req, res) {
    try {
      const post = await Post.create({
        author_id: req.user_id,
        ...req.body,
      });

      const like = await Like.create({
        post_id: post.id,
      });

      if (!post) {
        return res.status(400).json({ error: "Post not created" });
      }
      return (
        res.status(200).json(post),
        {
          like,
        }
      );
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await Post.findAll({
        order: [["created_at", "DESC"]],
        attributes: ["id", "author_id", "description", "image", "created_at"],
        include: [
          {
            model: User,
            as: "user",
            attributes: ["name"],
          },
          {
            model: Like,
            as: "likes_info",
            attributes: ["users_liked", "likes"],
          },
          {
            model: Comment,
            as: "comments",
            attributes: ["id", "user_id", "user_name", "comment", "created_at"],
          },
        ],
      });

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getPostsByUser(req, res) {
    try {
      const posts = await Post.findAll({
        order: [["created_at", "DESC"]],
        where: {
          author_id: req.user_id,
        },
        attributes: ["id", "author_id", "description", "image", "created_at"],
        include: [
          {
            model: User,
            as: "user",
            attributes: ["name"],
          },
          {
            model: Like,
            as: "likes_info",
            attributes: ["users_liked", "likes"],
          },
          {
            model: Comment,
            as: "comments",
            attributes: ["id", "user_id", "user_name", "comment", "created_at"],
          },
        ],
      });

      if (!posts) {
        return res.status(400).json({ error: "Post not found" });
      }

      const postList = [];
      for (const item of posts) {
        postList.push(item);
      }
      return res.status(200).json(postList);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    const userId = req.user_id;
    const postId = req.params.id;

    const post = await Post.findOne({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return res.status(400).json({ error: "Post not found" });
    }

    if (post.author_id === userId) {
      try {
        const updatedPost = await post.update(req.body);
        return res.status(200).json(updatedPost);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }

    return res.status(401).json({ error: "You are not authorized" });
  }

  async delete(req, res) {
    const userId = req.user_id;

    try {
      const post = await Post.destroy({
        where: {
          id: req.params.id,
          author_id: userId,
        },
      });
      if (!post) {
        return res.status(400).json({ error: "Post not found" });
      }
      return res.status(200).json({ message: "Post deleted" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new PostController();

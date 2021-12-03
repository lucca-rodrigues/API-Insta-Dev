const User = require("../Models/User");
const Post = require("../Models/Post");
const Like = require("../Models/Like");

class PostController {
  async create(req, res) {
    const userId = req.user_id;

    console.log(userId);

    try {
      const post = await Post.create({
        author_id: req.user_id,
        author: req.params.name,
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
      return res.status(400).json({ err: err.message });
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
            // required: true,
            attributes: ["name"],
          },
        ],
        include: [
          {
            model: Like,
            // as: "likes",
            // required: true,
            // attributes: ["post_id", "users_liked", "likes"],
          },
        ],
      });
      return res.status(200).json(posts);
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }

    // if (!posts) {
    //   return res.status(400).json({ error: "Post not found" });
    // }
    // return res.status(200).json(posts);
  }

  async getPostsByUser(req, res) {
    try {
      const posts = await Post.findAll({
        where: {
          author_id: req.user_id,
        },
        order: [["created_at", "DESC"]],
      });

      if (!posts) {
        return res.status(400).json({ error: "Post not found" });
      }

      const postList = [];
      for (const item of posts) {
        postList.push(item);
      }
      return res.status(200).json(postList);
    } catch (err) {
      return res.status(400).json({ err: err.message });
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
      } catch (err) {
        return res.status(400).json({ err: err.message });
      }
    }

    return res.status(401).json({ error: "You are not authorized" });
  }

  async delete(req, res) {
    const userId = req.user_id;
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!post) {
      return res.status(400).json({ error: "Post not found" });
    }

    if (post.author_id === userId) {
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
      } catch (err) {
        return res.status(400).json({ err: err.message });
      }
    }

    return res.status(401).json({ error: "You are not authorized" });
  }
}

module.exports = new PostController();

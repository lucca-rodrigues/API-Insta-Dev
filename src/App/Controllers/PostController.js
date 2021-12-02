const User = require("../Models/User");
const Post = require("../Models/Post");

class PostController {
  async create(req, res) {
    const post = await Post.create({
      author_id: req.user_id,
      author: req.username,
      ...req.body,
    });

    if (!post) {
      return res.status(400).json({ error: "Post not created" });
    }

    return res.status(200).json(post);
  }

  async getPosts(req, res) {
    const posts = await Post.findAll({
      order: [["created_at", "DESC"]],
      attributes: ["id", "author_id", "description", "image", "created_at"],
      include: [
        {
          model: User,
          as: "user",
          required: true,
          attributes: ["name"],
        },
      ],
    });

    if (!posts) {
      return res.status(400).json({ error: "Post not found" });
    }
    return res.status(200).json(posts);
  }

  async getPostsByUser(req, res) {
    const posts = await Post.findAll({
      order: [["created_at", "DESC"]],

      where: { author_id: req.user_id },
    });

    if (!posts) {
      return res.status(400).json({ error: "Post not found" });
    }

    const postList = [];
    for (const item of posts) {
      postList.push(item);
    }
    return res.status(200).json(postList);
  }

  async update() {}

  async delete() {}
}

module.exports = new PostController();

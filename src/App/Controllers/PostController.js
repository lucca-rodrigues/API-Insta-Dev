const Post = require("../Models/Post");

class PostController {
  async create(req, res) {
    const post = await Post.create({
      author_id: req.user_id,
      ...req.body,
    });

    if (!post) {
      return res.status(400).json({ error: "Post not created" });
    }

    return res.status(200).json(post);
  }

  async getPosts(req, res) {
    const posts = await Post.findAll();

    if (!posts) {
      return res.status(400).json({ error: "Post not found" });
    }
    return res.status(200).json(posts);
  }

  async getPostUser() {}

  async update() {}

  async delete() {}
}

module.exports = new PostController();

const Post = require("../Models/Post");

class LikeController {
  async addLike(req, res) {
    const postId = req.params.id;

    const verifyPost = await Post.findOne({
      where: { id: postId },
    });

    if (!verifyPost) {
      return res.status(400).json({ error: "Post not found" });
    }

    const postLike = await Post.update(
      { likes: verifyPost.likes + 1 },
      {
        where: { id: postId },
      }
    );

    if (!postLike) {
      return res.status(400).json({ error: "Error to add like" });
    }

    return res.json({ message: "Success, post liked" });
  }
  async removeLike() {}
}

module.exports = new LikeController();

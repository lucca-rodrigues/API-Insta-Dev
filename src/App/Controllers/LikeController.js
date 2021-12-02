const Post = require("../Models/Post");

class LikeController {
  async addLike(req, res) {
    const postId = req.params.id;
    const userId = req.user_id;

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

    if (!verifyPost.likes > 1) {
      return res.status(401).json({ message: "Post is liked for you" });
    }

    return res.json({ message: "Success, post liked" });
  }
  async removeLike(req, res) {
    const postId = req.params.id;

    const verifyPost = await Post.findOne({
      where: { id: postId },
    });

    if (!verifyPost) {
      return res.status(400).json({ error: "Post not found" });
    }

    if (verifyPost.likes > 0) {
      const postUnlike = await Post.update(
        { likes: verifyPost.likes - 1 },
        {
          where: { id: postId },
        }
      );

      if (!postUnlike) {
        return res.status(400).json({ error: "Error to add like" });
      }

      return res.json({ message: "Success, post unliked" });
    }

    return res.status(401).json({ message: "Post not have a like" });
  }
}

module.exports = new LikeController();

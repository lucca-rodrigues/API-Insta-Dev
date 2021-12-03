const Like = require("../Models/Like");
const Post = require("../Models/Post");

class LikeController {
  async addLike(req, res) {
    const { post_id, liked, users_liked, likes } = req.body;

    const like = await Like.findAll().then(() => {
      return res
        .status(200)
        .json(like)
        .catch((err) => {
          return res.status(400).json({
            message: "Error",
            error: err,
          });
        });
    });

    // const like = await Like.create({
    //   post_id,
    //   liked,
    //   users_liked,
    //   likes,
    // });

    // if (!like) {
    //   return res.status(400).json(like);
    // }

    // return res
    //   .status(200)
    //   .json({ data: { post_id, liked, users_liked, likes } });

    // return res.json({ message: "Success, like added" });
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

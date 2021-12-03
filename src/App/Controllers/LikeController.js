const Like = require("../Models/Like");
const Post = require("../Models/Post");

class LikeController {
  async addLike(req, res) {
    const postId = req.params.id;
    const userLiked = req.user_id;

    const post = await Post.findOne({
      where: { id: postId },
    });

    const likes = await Like.findOne({
      where: { post_id: postId },
    });

    const listUsersLiked = likes.users_liked;
    const thisUserAlreadyLike = likes.users_liked.includes(userLiked);

    if (!post) {
      return res.status(400).json({ error: "Post not found" });
    }

    if (thisUserAlreadyLike) {
      return res.status(401).json({ error: "You already liked this post" });
    }

    try {
      await Like.update(
        {
          users_liked: [...listUsersLiked, userLiked],
          liked: true,
          likes: likes.likes + 1,
        },
        { where: { post_id: postId } }
      );

      return res.json({
        message: "Success, post liked",
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
  async removeLike(req, res) {
    const postId = req.params.id;
    const userLiked = req.user_id;

    const post = await Post.findOne({
      where: { id: postId },
    });

    const likes = await Like.findOne({
      where: { post_id: postId },
    });

    const listUsersLiked = likes.users_liked;
    const thisUserAlreadyLike = likes.users_liked.includes(userLiked);
    const removeUserLiked = listUsersLiked.filter((user) => user !== userLiked);

    console.log("listUsersLiked", listUsersLiked);

    if (!post) {
      return res.status(400).json({ error: "Post not found" });
    }

    if (thisUserAlreadyLike) {
      try {
        await Like.update(
          {
            users_liked: removeUserLiked,
            likes: likes.likes - 1,
          },
          { where: { post_id: postId } }
        );

        return res.json({
          message: "Success, post unliked",
        });
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    }
    return res.status(401).json({ error: "You didn't like this post" });
  }
}

module.exports = new LikeController();

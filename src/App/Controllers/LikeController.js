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

    console.log("listUsersLiked", listUsersLiked);

    if (!post) {
      return res.status(400).json({ error: "Post not found" });
    }

    if (thisUserAlreadyLike) {
      return res.status(401).json({ error: "You already liked this post" });
    }

    try {
      const addLikeOnPost = await Like.update(
        { users_liked: [...listUsersLiked, userLiked], likes: likes.likes + 1 },
        { where: { post_id: postId } }
      );

      return res.json({
        message: "Success, post liked",
        status: addLikeOnPost,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }

    // return res.status(200).json({
    //   message: "Success, post liked",
    //   post_id: postId,
    //   users_liked: [userLiked],
    //   post: post,
    // });

    // try {
    //   // const like = await Like.findAll();
    //   const like = await Like.create({
    //     post_id: postId,
    //     liked: true,
    //     users_liked: [...users_liked, req.user_id],
    //     likes,
    //   });
    //   return res.status(200).json(like);
    // } catch (err) {
    //   return res.status(400).json({ error: err.message });
    // }

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

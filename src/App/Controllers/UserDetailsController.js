const bcryptjs = require("bcryptjs");
const UserDetails = require("../Models/UserDetails");

class UserDetailsController {
  async create(req, res) {
    // const { username, avatar, bio, gender } = req.body;
    const userId = req.user_id;

    const userBioExists = await UserDetails.findOne({
      where: {
        user_id: userId,
      },
    });

    if (userBioExists) {
      return res.status(401).json({ error: "User bio already exists" });
    }

    const data = {
      user_id: userId,
      ...req.body,
    };

    try {
      const detailDetails = await UserDetails.create(data);

      if (!detailDetails) {
        return res.status(400).json({ message: "Create user details failed!" });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async getUserBioDetails(req, res) {
    try {
      const user = await UserDetails.findOne({
        where: {
          user_id: req.user_id,
        },
        attributes: [
          "id",
          "user_id",
          "username",
          "avatar",
          "bio",
          "gender",
          "created_at",
        ],
      });

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    const { username, avatar, bio, gender } = req.body;
    const userBio = await UserDetails.update(
      { username, avatar, bio, gender },
      { where: { user_id: req.user_id } }
    );

    if (!userBio) {
      return res.status(400).json({ message: "Error to update bio" });
    }

    return res.status(200).json({ bio: { username, avatar, bio, gender } });
  }

  async delete(req, res) {
    const userId = req.user_id;
    const id = req.params.id;

    const bio = await UserDetails.findOne({
      where: {
        user_id: userId,
      },
    });

    if (!bio) {
      return res.status(400).json({ error: "User bio not found" });
    }

    try {
      const bioToDeleted = await UserDetails.destroy({
        where: {
          id: id,
        },
      });

      if (!bioToDeleted) {
        return res.status(400).json({ error: "Id bio not found" });
      }
      return res.status(200).json({ message: "User bio deleted!" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserDetailsController();

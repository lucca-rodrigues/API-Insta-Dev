const bcryptjs = require("bcryptjs");
const UserDetails = require("../Models/UserDetails");
const User = require("../Models/User");

class UserDetailsController {
  async create(req, res) {
    const { username, avatar, bio, gender } = req.body;

    const detail = await UserDetails.create({
      user_id: req.user_id,
      username,
      avatar,
      bio,
      gender,
    });

    if (!detail) {
      return res.status(400).json({ message: "Create user details failed!" });
    }

    return res
      .status(200)
      .json({ user_id: req.user_id, username, avatar, bio, gender });
  }

  async getDetails(req, res) {
    const user = await UserDetails.findOne({
      where: {
        user_id: req.user_id,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    return res.status(200).json(user);
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
}

module.exports = new UserDetailsController();

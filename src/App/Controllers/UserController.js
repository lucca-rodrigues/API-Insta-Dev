const User = require("../Models/User");
const UserDetails = require("../Models/UserDetails");

class UserController {
  async create(req, res) {
    const verifyUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!verifyUser) {
      const user = await User.create(req.body);

      return res.json(user);
    }
    return res.status(400).json({ error: "User already exists" });
  }

  async getAllUsers(req, res) {
    const users = await User.findAll({
      order: [["created_at", "DESC"]],
      attributes: ["id", "name", "email", "created_at", "updated_at"],
    });

    if (!users) {
      return res.status(400).json({ error: "No users found" });
    }

    return res.status(200).json(users);
  }

  async getUser(req, res) {
    console.log("req.user_id", req.user_id);
    try {
      const user = await User.findAll({
        where: {
          id: req.user_id,
        },
        attributes: ["id", "name", "email", "createdAt"],
        include: [
          {
            model: UserDetails,
            as: "user_details",
            // required: true,
            attributes: ["username", "avatar", "bio", "gender"],
          },
        ],
      });

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    await User.destroy({
      where: {
        id: req.user_id,
      },
    });

    return res.status(200).json({ message: "User deleted!" });
  }
}

module.exports = new UserController();

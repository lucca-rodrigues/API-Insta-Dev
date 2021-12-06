const User = require("../Models/User");
const UserDetails = require("../Models/UserDetails");

class UserController {
  async create(req, res) {
    try {
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
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        order: [["created_at", "DESC"]],
        attributes: ["id", "name", "email", "created_at", "updated_at"],
      });

      if (!users) {
        return res.status(400).json({ error: "No users found" });
      }

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getUserDetails(req, res) {
    try {
      const user = await User.findAll({
        where: {
          id: req.user_id,
        },
        attributes: ["id", "name", "email", "created_at"],
        include: [
          {
            model: UserDetails,
            as: "biography",
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
    const userId = req.user_id;
    const id = req.params.id;
    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    try {
      if (id === userId) {
        await User.destroy({
          where: {
            id: req.user_id,
          },
        });

        return res.status(200).json({ message: "User deleted!" });
      }
      return res
        .status(401)
        .json({ error: "this user is diferent to logged user" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();

const User = require("../Models/User");

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
    const users = await User.findAll();

    return res.status(200).json(users);
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

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
}

module.exports = new UserController();

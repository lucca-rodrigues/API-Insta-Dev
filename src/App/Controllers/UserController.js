const User = require("../Models/User");

class UserController {
  async create(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async getAllUsers(req, res) {
    const users = await User.findAll();

    return res.status(200).json(users);
  }
}

module.exports = new UserController();

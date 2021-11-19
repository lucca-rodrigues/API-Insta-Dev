const User = require("../Models/User");

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }
  async show(req, res) {
    const userId = req.params.id;
    const users = await User.findByPk(userId);

    return res.json(users);
  }

  async update(req, res) {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    const { name, email } = req.body;

    user.name = name;
    user.email = email;

    await user.save();

    return res.json(user);
  }
}

module.exports = new UserController();

const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const User = require("../Models/User");

class AuthController {
  async authenticate(req, res) {
    const { name, email, password } = req.body;

    try {
      const userData = {};
      if (email) {
        userData.email = email;
      } else if (name) {
        userData.name = name;
      } else {
        return res.status(401).json({
          error: "Invalid credentials, or user not found",
        });
      }

      const user = await User.findOne({
        where: userData,
      });

      if (!user) res.status(400).send({ error: "User not found" });

      if (!(await user.checkPassword(password))) {
        return res.status(401).send({ error: "Password does not match!" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();

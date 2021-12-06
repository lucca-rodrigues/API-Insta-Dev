const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const { encrypt } = require("../../Utils/crypt");

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

      if (!user) res.status(401).send({ error: "User not found" });

      if (!(await user.checkPassword(password))) {
        return res.status(401).send({ error: "Password does not match!" });
      }

      const { id, name: user_name } = user;

      const { iv, content } = encrypt(id);

      const newId = `${iv}:${content}`;

      const token = jwt.sign(
        { user_id: newId, name: name },
        process.env.HASH_BCRYPT,
        {
          expiresIn: process.env.EXPIRE_IN,
        }
      );

      return res.status(200).json({ user: { id, name: user_name }, token });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();

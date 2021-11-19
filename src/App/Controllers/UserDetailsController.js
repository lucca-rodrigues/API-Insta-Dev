const UserDetails = require("../Models/UserDetails");

class UserDetailsController {
  async create(req, res) {
    const userId = req.params.id;
    const userDetails = req.body;

    const data = {
      userId,
      ...userDetails,
    };

    const detail = await UserDetails.create(data);

    return res.json(detail);
  }

  async getDetails(req, res) {
    const userId = req.params.id;

    const details = await UserDetails.findOne({
      where: {
        userId: userId,
      },
    });

    return res.status(200).json(details);
  }
}

module.exports = new UserDetailsController();

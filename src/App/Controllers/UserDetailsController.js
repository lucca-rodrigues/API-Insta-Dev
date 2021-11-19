const UserDetails = require("../Models/UserDetails");

class UserDetailsController {
  async create(req, res) {
    const data = req.body;
    const id = req.params.id;

    const userDetails = {
      user_id: id,
      ...data,
    };

    const details = await UserDetails.create(userDetails);

    return res.json(details);
  }

  async getDetails(req, res) {
    const details = await UserDetails.findAll();

    return res.status(200).json(details);
  }

  async getDetailsById(req, res) {
    const details = await UserDetails.findOne({
      where: {
        user_id: req.params.id,
      },
    });

    return res.status(200).json(details);
  }
}

module.exports = new UserDetailsController();

const UserDetails = require("../Models/UserDetails");

class UserDetailsController {
  async create(req, res) {
    const userId = req.params.id;
    const userDetails = req.body;

    const data = {
      userId,
      ...userDetails,
    };

    const detail = await UserDetails.create(data)
      .then(() => {
        return res.status(200).json(detail);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getDetails(req, res) {
    const userId = req.params.id;
    const details = await UserDetails.findAll()
      .then(() => {
        return res.status(200).json(details);
      })
      .catch((err) => {
        console.log(err);
      });
    // const details = await UserDetails.findOne({
    //   where: {
    //     userId: userId,
    //   },
    // });
  }
}

module.exports = new UserDetailsController();

const UserDetails = require("../Models/UserDetails");
const User = require("../Models/User");
const validateIfFieldsNotEmpty = require("../../Utils/validateNotEmptyFields");

class UserDetailsController {
  async create(req, res) {
    const { username, avatar, bio, gender } = req.body;
    const id = req?.params?.id;

    const userDetails = {
      user_id: id,
      username,
      avatar,
      bio,
      gender,
    };

    if (validateIfFieldsNotEmpty(userDetails)) {
      const details = await UserDetails.create(userDetails)
        .then(() => {
          return res.status(200).json(details);
        })
        .catch((err) => {
          return res.status(400).json({
            error: err?.errors[0].message ? err?.errors[0].message : err,
          });
        });
    } else {
      return res.status(400).json({
        error: "Error to create details, set all field values required",
      });
    }
  }

  async getDetails(req, res) {
    const details = await UserDetails.findAll()
      .then(() => {
        return res.status(200).json(details);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ error: err?.errors[0].message });
      });
  }

  async getDetailsById(req, res) {
    const details = await UserDetails.findOne({
      where: {
        user_id: req.params.id,
      },
    })
      .then(() => {
        return res.status(200).json(details);
      })
      .catch((err) => {
        console.log(err);
        return res.status(404).json({ error: "user not aready exists!" });
      });
  }
}

module.exports = new UserDetailsController();

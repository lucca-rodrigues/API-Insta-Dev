const bcryptjs = require("bcryptjs");
const UserDetails = require("../Models/UserDetails");
const User = require("../Models/User");
// const validateIfFieldsNotEmpty = require("../../Utils/validateNotEmptyFields");

class UserDetailsController {
  // async create(req, res) {
  //   const { username, avatar, bio, gender } = req.body;
  //   const id = req?.params?.id;

  //   const userDetails = {
  //     user_id: id,
  //     username,
  //     avatar,
  //     bio,
  //     gender,
  //   };

  //   if (validateIfFieldsNotEmpty(userDetails)) {
  //     const details = await UserDetails.create(userDetails)
  //       .then(() => {
  //         return res.status(200).json(details);
  //       })
  //       .catch((err) => {
  //         return res.status(400).json({
  //           error: err?.errors[0].message ? err?.errors[0].message : err,
  //         });
  //       });
  //   } else {
  //     return res.status(400).json({
  //       error: "Error to create details, set all field values required",
  //     });
  //   }
  // }

  async create(req, res) {
    const { username, avatar, bio, gender } = req.body;

    const detail = await UserDetails.create({
      user_id: req.user_id,
      username,
      avatar,
      bio,
      gender,
    });

    if (!detail) {
      return res.status(400).json({ message: "Create user details failed!" });
    }

    return res
      .status(200)
      .json({ user_id: req.user_id, username, avatar, bio, gender });
  }

  async getDetails(req, res) {
    const user = await UserDetails.findOne({
      where: {
        user_id: req.user_id,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  }
}

module.exports = new UserDetailsController();

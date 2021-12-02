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

  // async getDetails(req, res) {
  //   const details = await UserDetails.findAll()
  //     .then(() => {
  //       return res.status(200).json(details);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(400).json({ error: err?.errors[0].message });
  //     });
  // }

  // async getDetailsById(req, res) {
  //   const details = await UserDetails.findOne({
  //     where: {
  //       user_id: req.params.id,
  //     },
  //   })
  //     .then(() => {
  //       return res.status(200).json(details);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(404).json({ error: "user not aready exists!" });
  //     });
  // }

  // async update(req, res) {
  //   const {
  //     username,
  //     avatar,
  //     bio,
  //     gender,
  //     old_password,
  //     new_password,
  //     confirm_new_password,
  //   } = req.body;

  //   const user = await User.findOne({
  //     where: {
  //       id: req.user_id,
  //     },
  //   });

  //   if (!user) {
  //     return res.status(400).json({ message: "User not exits!" });
  //   }

  //   let encryptedPassword = "";

  //   if (old_password) {
  //     if (!(await user.checkPassword(old_password))) {
  //       return res.status(401).json({ error: "Old password does not match!" });
  //     }

  //     if (new_password === "" || confirm_new_password === "") {
  //       return res.status(401).json({
  //         error: "We need a new_password and confirm_new_password attributes!",
  //       });
  //     }

  //     if (new_password !== confirm_new_password) {
  //       return res.status(401).json({
  //         error: "New password and confirm new password does not match",
  //       });
  //     }

  //     encryptedPassword = await bcryptjs.hash(new_password, 8);
  //   }

  //   await UserDetails.update(
  //     {
  //       name: username ?? user.username,
  //       avatar: avatar ?? user.avatar,
  //       bio: bio ?? user.bio,
  //       gender: gender ?? user.gender,
  //       password_hash:
  //         encryptedPassword !== "" ? encryptedPassword : user.password_hash,
  //     },
  //     {
  //       where: {
  //         id: user.id,
  //       },
  //     }
  //   );

  //   return res.status(200).json({ message: "User updated!" });
  // }

  // async create(req, res) {
  //   const userId = req.user_id;

  //   if (!userId) {
  //     return res.status(400).json({ error: "User not exits!" });
  //   }

  //   if (!userDetails) {
  //     return res.status(400).json({ error: "Error to insert user details" });
  //   }

  //   const userDetails = await UserDetails.update(req.body)
  //     .then(() => {
  //       return res.status(200).json(userDetails);
  //     })
  //     .catch((err) => {
  //       return res.status(400).json({ error: err.errors[0].message });
  //     });
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
      return res.status(400).json({ message: "Created post failed!" });
    }

    return res
      .status(200)
      .json({ data: { user_id: req.user_id, username, avatar, bio, gender } });
  }
}

module.exports = new UserDetailsController();

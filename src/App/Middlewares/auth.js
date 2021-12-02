const { decryptedToken } = require("../../Utils/decryptToken");
const { decrypt } = require("../../Utils/crypt");

const verifyJwt = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unset token!" });
  }

  try {
    const { user_id } = await decryptedToken(authHeader);
    req.user_id = parseInt(decrypt(user_id));
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

module.exports = verifyJwt;

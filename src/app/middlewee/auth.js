const jwt = require("jsonwebtoken");
function createToken(user) {
  const token = jwt.sign(
    {
      email: user.email,
    },
    "secret"
  );
  return token;
}
function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  console.log("ok")
  const verify = jwt.verify(token, "secret");
  if (!verify?.email) {
    return res.send("Unauthorized Access");
  }
  req.user = verify.email;
  next();
}
module.exports = {
  createToken,
  verifyToken,
};

const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = {
  authenticate(req, res, next) {
    jwt.verify(req.cookies.adminToken, secret, (err, payload) => {
      if (err) {
        res.status(401).json({ verified: false });
      } else {
        next();
      }
    });
  },
};

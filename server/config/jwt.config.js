const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

// creating a method that checks user authentication
module.exports = {
  authenticate(req, res, next) {
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
      if (err) {
        res.status(401).json({ verified: false });
      } else {
        next();
      }
    });
  },
};

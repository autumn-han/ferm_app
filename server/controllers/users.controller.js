const User = require("../models/user.model");

module.exports.newUser = (req, res) => {
  User.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.json(err));
};

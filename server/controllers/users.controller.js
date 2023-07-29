const User = require("../models/user.model");

module.exports.newUser = (req, res) => {
  User.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.json(err));
};

module.exports.getUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

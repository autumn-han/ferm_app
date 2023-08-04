const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = {
  // register user
  register: async (req, res) => {
    try {
      // check if user already exists in database, if not, create new user
      const user = await User.findOne({ userName: req.body.userName });
      if (user) {
        return res
          .status(400)
          .json({ msg: "Username already exists, please login" });
      } else {
        const newUser = await User.create(req.body);
        // create JSON webtoken with user creation
        const userToken = jwt.sign(
          {
            _id: newUser._id,
          },
          secret,
          { expiresIn: "2h" }
        );
        res
          .status(201)
          // create cookie to store user info on the client side
          .cookie("userToken", userToken, { httpOnly: true, maxAge: 7200000 })
          .json(newUser);
      }
    } catch (err) {}
  },
  // login user
  login: async (req, res) => {},
  // get one user
  getUser: async (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },
  // update user
  update: async (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedUser) => res.json(updatedUser))
      .catch((err) => res.json(err));
  },
};

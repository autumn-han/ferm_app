const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = {
  // REGISTER USER
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
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // LOGIN USER
  login: async (req, res) => {
    try {
      // check if userName matches a userName in the database
      const user = await User.findOne({ userName: req.body.userName });
      if (user === null) {
        return res.status(400).json({ msg: "Invalid login attempt" });
      }
      const correctPassword = await bcryptjs.compare(
        req.body.passWord,
        user.passWord
      );
      if (!correctPassword) {
        return res.status(400).json({ msg: "Invalid login attempt" });
      } else {
        const userToken = jwt.sign(
          {
            _id: user._id,
          },
          secret,
          { expiresIn: "2h" }
        );
        res
          .status(200)
          .cookie("userToken", userToken, { httpOnly: true, maxAge: 7200000 })
          .json({ msg: "Successful login" });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // LOGOUT USER
  logout: (req, res) => {
    res.clearCookie("userToken");
    res.sendStatus(200);
  },
  // GET ALL USERS
  getAllUsers: (req, res) => {
    User.find({})
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  },
  // GET ONE USER
  getUser: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },
  // UPDATE USER
  update: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedUser) => res.json(updatedUser))
      .catch((err) => res.json(err));
  },
};

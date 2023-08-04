const User = require("../models/user.model");

module.exports.register = (req, res) => {
  User.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.status(400).json(err));
};

module.exports.update = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => res.json(err));
};

// ----> LOGIN METHOD <-----
// module.exports.login = async (req, res) => {
//   const user = await User.findOne({ userName: req.body.userName });
//   if (user === null) {
//     return res.sendStatus(400);
//   }
//   const correctPassword = await bcrypt.compare(
//     req.body.passWord,
//     user.passWord
//   );
//   if (!correctPassword) {
//     return res.sendStatus(400);
//   }
//   const userToken = jwt.sign(
//     {
//       id: user._id,
//     },
//     process.env.SECOND_SECRET_KEY
//   );
//   res
//     .cookie("userToken", userToken, {
//       httpOnly: true,
//     })
//     .json({ msg: "successful login" });
// };

module.exports.getUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

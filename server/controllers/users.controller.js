const User = require("../models/user.model");

module.exports.register = (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      const userToken = jwt.sign(
        {
          id: newUser._id,
        },
        process.env.SECOND_SECRET_KEY
      );
      res
        .cookie("userToken", userToken, {
          httpOnly: true,
        })
        .json({ message: "successful registration", user: newUser });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.login = async (req, res) => {
  const user = await User.findOne({ userName: req.body.userName });
  if (user === null) {
    return res.sendStatus(400);
  }
  const correctPassword = await bcrypt.compare(
    req.body.passWord,
    user.passWord
  );
  if (!correctPassword) {
    return res.sendStatus(400);
  }
  const userToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECOND_SECRET_KEY
  );
  res
    .cookie("userToken", userToken, {
      httpOnly: true,
    })
    .json({ msg: "successful login" });
};

module.exports.getUser = (req, res) => {
  User.findOne({ _id: req.body.id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

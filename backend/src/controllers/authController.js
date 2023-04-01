const { User } = require("../models");

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log("the answerts", user);
    await user.save();
    res.status(201).send({ user, name: "done" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("the users values are", req.body);
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found");
    }
    if (password !== user.password) {
      throw new Error("invalid password");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { register, login };

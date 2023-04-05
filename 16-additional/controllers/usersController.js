const Users = require("../model/User");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  const users = await Users.find();
  if (!users) return res.status(204).json({ message: "No users found." });
  res.json(users);
};

const updateUser = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }

  const user = await Users.findOne({ _id: req.body.id }).exec();
  if (!user) {
    return res.status(204).json({ message: `No user matches ${req.body.id}` });
  }

  if (req.body?.username) user.username = req.body.username;
  if (req.body?.pwd) {
    const hashedPwd = await bcrypt.hash(req.body.pwd, 10);
    user.password = hashedPwd;
  }
  const result = await user.save();
  res.json(result);
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }

  const user = await Users.findOne({ _id: req.body.id }).exec();

  if (!user) {
    return res.status(204).json({ message: `No user matches ${req.body.id}` });
  }
  const result = await Users.deleteOne({ _id: req.body.id });
  res.json(result);
};

module.exports = { getAllUsers, updateUser, deleteUser };

/* models for getting and sending data into database */
const User = require("../models/user.model");

const response = require("../../common/response");

/* get all userData */
exports.getUser = (req, res) => {};

/* get user profile data */
exports.profile = (req, res) => {
  try {
    if (req.user) {
      return res.status(200).json({ user: req.user});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* get user by id */
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* update user */
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User does not exist" });
    }
    res.status(200).json({ user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* delete user */
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    /* user which "is_deleted:false" will be null here */
    const user = await User.findOne({
      _id: userId,
      is_deleted: false
    });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    /* Update is_deleted flag to true for delete user */
    await User.findOneAndUpdate(
      { _id: userId },
      { $set: { is_deleted: true } },
      { new: true }
    );

    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

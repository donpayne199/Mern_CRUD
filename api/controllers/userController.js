import { User } from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: { users },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const getUser = (req, res) => {
  req.requestTime = new Date().toISOString();
  const id = Number(req.params.id);
  const user = users.find((el) => el.id === id);

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "No such user exists",
    });
  }

  res.status(200).json({
    status: "success",
    time: req.requestTime,
    data: {
      user,
    },
  });
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const updateUser = (req, res) => {
  if (Number(req.params.id) > users.length) {
    return res.status(404).json({
      status: "failed",
      message: "No such id to update",
    });
  }
  return res.status(200).json({
    status: "success",
    messagge: "Great patch job!",
  });
};

const deleteUser = (req, res) => {
  if (Number(req.params.id) > users.length) {
    return res.status(400).json({
      status: "failed",
      message: "no such id to delete",
    });
  }

  res.status(200).json({
    status: "success",
    data: { message: "That id has been deleted." },
  });
};

export {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

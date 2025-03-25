const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      role,
      profession,
      hourlyRate,
      address,
      dob,
      mobileNo,
      gender,
      upi,
      description,
      socialmediaHandles,
      experience,
      image,
    } = req.body;
    // console.log(req.body);
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "user is already present", success: false });
    }
    const userModel = new UserModel({
      name,
      username,
      email,
      password,
      role,
      profession,
      hourlyRate,
      address,
      dob,
      mobileNo,
      gender,
      upi,
      description,
      socialmediaHandles,
      experience,
      image,
    });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(200).json({ message: "Register Successfully" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "uanble to register" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(409)
        .json({ message: "user not present", success: false });
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(409).json({ message: "email and password is wrong!" });
    }

    const jwttoken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login Successful",
      success: true,
      jwttoken,
      user: user,
    });
  } catch (error) {
    res.status(500).json({ message: "uanble to login" });
  }
};

 const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "uanble to get user" });
  }
};
module.exports = {
  login,
  getUsers,
  register,
};

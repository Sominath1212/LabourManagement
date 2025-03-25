const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  hourlyRate: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  upi: {
    type: String,
  },
  socialmediaHandles: {
    type: String,
    required: true,
  },
  description: { type: String, required: false },
  experience: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

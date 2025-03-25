const express = require("express");
const {
  loginValidation,
  registerValidation,
} = require("../middlewares/AuthValidation");
const { login, register, getUsers } =
  require("../controllers/Authcontroller");
const router = express.Router();

router.post("/login", loginValidation, login);

router.post("/register", registerValidation, register);
router.get("/getall", getUsers);

module.exports = router;

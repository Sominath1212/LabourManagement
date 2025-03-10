const jwt = require("jsonwebtoken");
require("dotenv").config();
const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({ message: "Unauthorized token Access" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Unauthorized token Access" });
  }
};

module.exports = { ensureAuthenticated };

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
require("./models/db");
const AuthRoute = require("./routes/AuthRoute");
const PORT = process.env.PORT || 8080;
const GigRoute=require("./routes/GigRoute")
const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/auth", AuthRoute);
app.use("/gig",GigRoute)
// app.get("/", (req, res) => {
//   res.json("server is here!!");
// });

app.listen(PORT, () => {
  console.log(`server is started.....http://localhost:${PORT}`);
});

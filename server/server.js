const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

require("./config/mongoose.config");
require("dotenv").config();

app.use(cookieParser());
app.use(cors({ origin: process.env.DB_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/users.routes");
userRoutes(app);

app.listen(process.env.DB_PORT, () =>
  console.log("The server is all fired up")
);

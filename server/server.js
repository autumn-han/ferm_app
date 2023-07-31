const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// might not need to import jwt here?
const jwt = require("jsonwebtoken");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

require("dotenv").config();

require("./config/mongoose.config");
const userRoutes = require("./routes/users.routes");
userRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("dotenv").config();

require("./config/mongoose.config");
const userRoutes = require("./routes/users.routes");
userRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

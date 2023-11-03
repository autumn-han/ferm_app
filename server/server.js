const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const Grid = require("gridfs-stream");
const { GridFsStorage } = require("multer-gridfs-storage");
const methodOverride = require("method-override");
const crypto = require("crypto");
const path = require("path");

require("./config/mongoose.config");
require("dotenv").config();

const gfs = new Grid(process.env.MongoDBURL, mongoose.mongo);

app.use(cookieParser());
app.use(cors({ origin: process.env.DB_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// gridFS middleware
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// create storage element
const storage = new GridFsStorage({
  gfs: gfs,
  url: process.env.DB_ORIGIN,
  file: (req, file, cb) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
        };
        resolve(fileInfo);
      });
    });
  },
  root: "uploads",
});

// multer configuration for single file uploads
let upload = multer({ storage }).single("file");

const userRoutes = require("./routes/users.routes");
userRoutes(app);

app.listen(process.env.DB_PORT, () =>
  console.log("The server is all fired up")
);

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

app.use(cookieParser());
app.use(cors({ origin: process.env.DB_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// gridFS middleware
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// create connection
const conn = mongoose.createConnection(process.env.MongoDBURL);

// initialize gfs
let gfs;

// initialize stream
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// create storage
const storage = new GridFsStorage({
  url: process.env.MongoDBURL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucket: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

const userRoutes = require("./routes/users.routes");
userRoutes(app);

app.listen(process.env.DB_PORT, () =>
  console.log("The server is all fired up")
);

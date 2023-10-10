const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );

// let bucket;
// mongoose.connection.on("connected", () => {
//   var db = mongoose.connections[0].db;
//   bucket = new mongoose.mongo.GridFSBucket(db, {
//     bucketName: "newBucket",
//   });
//   console.log(bucket);
// });

// TO-DO:
// 1. build out the configuration to implement GridFS

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 20,
    },
    passWord: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 20,
    },
    projects: [
      {
        title: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
        status: {
          type: String,
          enum: ["Primary", "Secondary", "Aging", "Complete"],
          default: "Primary",
        },
        desc: {
          type: String,
        },
        logEntries: [
          {
            entryDate: {
              type: Date,
            },
            entryText: {
              type: String,
            },
            // picUpload: GridFS (API) or storing directly into document if 16MB or less
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

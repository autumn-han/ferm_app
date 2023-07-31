const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "username is required"],
      minLength: [6, "username must be at least 6 characters"],
      maxLength: [20, "username cannot be longer than 20 characters"],
    },
    passWord: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "password must be at least 8 characters"],
      maxLength: [20, "password cannot be longer than 20 characters"],
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

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "passwords must match");
  }
  next();
});

UserSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", UserSchema);

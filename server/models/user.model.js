const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username is required"],
      minLength: [6, "Username must be at least 6 characters"],
    },
    passWord: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must be at least 8 characters"],
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
            // picUpload: GridFS (API)
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

// gets and sets the confirmedPassword value
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

// checks the confirmedPassword value against the password field
UserSchema.pre("validate", function (next) {
  if (this.passWord !== this.confirmPassword) {
    this.invalidate(
      "confirmPassword",
      "Password must match confirmed password field"
    );
  }
});

// if password matches confirmPassword value, value will be saved in the database
UserSchema.pre("save", function (next) {
  bcryptjs.hash(this.passWord, 10).then((hash) => {
    this.passWord = hash;
    next();
  });
});

module.exports = mongoose.model("User", UserSchema);

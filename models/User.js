const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

//fire this function after doc saved to db
userSchema.post("save", function (doc, next) {
  next();
});

//fire this function before doc saved to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  console.log("user about to be created", this);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;

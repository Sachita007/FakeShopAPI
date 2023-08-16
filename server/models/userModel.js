const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email "],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password cannot be empty"],
    minlength: 8,
    select: false,
  },
  cpassword: {
    type: String,
    required: [true, "Confirm Password cannot be empty"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  address: {
    street: String, // the user's street address
    city: String, // the user's city
    state: String, // the user's state
    postalCode: String, // the user's postal code
    country: String, // the user's country
  },
  phone: String,
  passwordChangedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  // this.password = await bcrypt.hash(this.password, 12);

  // Delete Confirm Password field
  this.cpassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changeTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(changeTimeStamp, JWTTimestamp);
    if (JWTTimestamp < changeTimeStamp) {
      return true;
    }
  }
  return false;
};
const User = mongoose.model("User", userSchema);
module.exports = User;

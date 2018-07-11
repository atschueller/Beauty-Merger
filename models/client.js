const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Must be at least 6 characters."
    ],
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  
});

const User = mongoose.model("user", userSchema);

module.exports = User;
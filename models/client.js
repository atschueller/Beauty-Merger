const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  
  const User = mongoose.model("user", userSchema);
  
  module.exports = User;
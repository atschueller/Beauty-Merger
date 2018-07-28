const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  age: {
    type: String,
    trim: true,
    required: true
  },
  ethnicity: {
    type: String,
    trim: true,
    required: true
  },
  eyecolor: {
    type: String,
    trim: true,
    required: true
  },
  haircolor: {
    type: String,
    trim: true,
    required: true
  },
  hairtype: {
    type: String,
    trim: true,
    required: true
  },
  hairdensity: {
    type: String,
    trim: true,
    required: true
  },
  hairtexture: {
    type: String,
    trim: true,
    required: true
  },
  skintone: {
    type: String,
    trim: true,
    required: true
  },
  skintype: {
    type: String,
    trim: true,
    required: true
  },
  productbrands: {
    type: String,
    trim: true,
    required: true
  },
  
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;

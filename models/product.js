const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  url: String,
  review: [{review: String}]
  });

const Product = mongoose.model("products", productSchema);

module.exports = Product;
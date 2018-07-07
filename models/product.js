const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    url: String,
    description: String,
    date: { type: Date, default: Date.now }
  });
  
  const Product = mongoose.model("product", productSchema);
  
  module.exports = Product;
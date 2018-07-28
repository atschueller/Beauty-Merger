const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id:  mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  url: String,
  review: [
    {
      review: {
        type: String
      }
    }
  ]
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;

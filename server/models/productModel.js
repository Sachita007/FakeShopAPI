const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Product must have a name"],
  },
  category: [String],
  price: {
    type: Number,
    required: [true, "A product must have a price"],
    default: 1000,
  },
  discounted_price: {
    type: Number,

    default: 1000,
  },
  edit: {
    type: String,
    default: true,
  },
  images: [String],
  description: {
    type: String,
    trim: true,
  },
  product_rating: {
    type: Number,
    default: 4.5,
    max: [5, "A tour rating must have less then and equal to 5.0"],
    min: [1, "A tour rating must have greater then and equal to 1.0"],
  },
  brand: {
    type: String,
  },
  product_specifications: [Object],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

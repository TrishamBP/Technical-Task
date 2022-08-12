const mongoose = require("mongoose");
const validator = require("validator");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  priceMin: {
    type: Number,
    required: true,
  },
  priceMax: {
    type: Number,
    required: true,
  },
});

module.exports = Product;

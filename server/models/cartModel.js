const mongoose = require("mongoose");
ObjectId = mongoose.Schema.ObjectId;
const cartSchema = new mongoose.Schema({
  userId: ObjectId,
  items: [
    {
      productId: ObjectId,
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  total: Number,
  edit: {
    type: String,
    default: true,
  },
  created_at: Date,
  updated_at: Date,
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;

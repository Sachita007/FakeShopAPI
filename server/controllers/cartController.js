const Cart = require("./../models/cartModel");

const AppError = require("./../utils/AppError");
const tryCatch = require("./../utils/tryCatch");
const APIFeatures = require("./../utils/apiFeatures");

// Get All Cart
exports.getAllCart = tryCatch(async (req, res, next) => {
  const cart = await Cart.find({}, { _id: 0, "items._id": 0 });
  res.status(200).json({
    status: "success",
    count: cart.length,
    Data: cart,
  });
});

//Get Cart By UserId
exports.getCart = tryCatch(async (req, res, next) => {
  const cart = await Cart.findOne(
    { userId: req.params.id },
    { _id: 0, "items._id": 0 }
  );
  if (!cart) {
    return next(new AppError("No cart found with this id", 404));
  }
  res.status(200).json({
    status: "success",
    data: cart,
  });
});

// Add item to Cart
exports.addCart = tryCatch(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.params.id });
  if (!cart) {
    const newCart = await Cart.create({
      userId: req.params.id,
      items: [req.body.item],
      total: req.body.item.price,
    });
    res.status(201).json({
      status: "success",
      data: newCart,
    });
  } else {
    const updatedItems = cart.items.filter(
      (item) => item.productId.toString() == req.body.item.productId
    );
    let updated;
    if (updatedItems.length == 0) {
      console.log("in");
      updated = await Cart.findOneAndUpdate(
        { userId: req.params.id },
        {
          $push: { items: req.body.item },
          $inc: { total: req.body.item.price },
        },
        { new: true }
      );
    } else {
      console.log("in2");
      console.log(updatedItems);
      quantity = updatedItems[0].quantity + 1;
      console.log(quantity);
      updated = await Cart.findOneAndUpdate(
        { userId: req.params.id, "items.productId": req.body.item.productId },
        {
          $set: { "items.$.quantity": quantity },
          $inc: { total: req.body.item.price },
        },
        { new: true }
      );
    }

    res.status(201).json({
      status: "success",
      data: updated,
    });
  }
});

// edit cart
exports.editCart = tryCatch(async (req, res, next) => {
  if (!req.body.item.productId) {
    return next(new AppError("Please provide productId also", 404));
  }
  const cart = await Cart.findOne({ userId: req.params.id });
  if (!cart) {
    return next(new AppError("No cart found with this id", 404));
  } else {
    const updatedItems = cart.items.filter(
      (item) => item.productId.toString() == req.body.item.productId
    );
    if (updatedItems.length == 0) {
      return next(
        new AppError("No Item with this productId in cart of this user", 404)
      );
    }
    updatedArry = [];
    price = 0;
    cart.items.forEach((element) => {
      if (element.productId.toString() === req.body.item.productId) {
        for (const key in req.body.item) {
          if (key in element) {
            element[key] = req.body.item[key];
          }
        }
        price += element.quantity * element.price;
        updatedArry.push(element);
      } else {
        price += element.quantity * element.price;
        updatedArry.push(element);
      }
    });
    updated = await Cart.findOneAndUpdate(
      { userId: req.params.id, "items.productId": req.body.item.productId },
      { $set: { items: updatedArry, total: price } },
      { new: true }
    );

    res.status(201).json({
      status: "success",
      data: updated,
    });
  }
});

// delet item from cart
exports.deleteItem = tryCatch(async (req, res, next) => {
  if (!req.params.productId) {
    return next(new AppError("Please provide productId also", 404));
  }
  const cart = await Cart.findOne({ userId: req.params.id });
  if (!cart) {
    return next(new AppError("No cart found with this id", 404));
  } else {
    const updatedItems = cart.items.filter(
      (item) => item.productId.toString() == req.params.productId
    );
    if (updatedItems.length == 0) {
      return next(
        new AppError("No Item with this productId in cart of this user", 404)
      );
    }
    updatedArry = [];
    price = 0;
    cart.items.forEach((element) => {
      if (element.productId.toString() !== req.params.productId) {
        price += element.quantity * element.price;
        updatedArry.push(element);
      }
    });
    updated = await Cart.findOneAndUpdate(
      { userId: req.params.id, "items.productId": req.params.productId },
      { $set: { items: updatedArry, total: price } },
      { new: true }
    );

    res.status(201).json({
      status: "success",
      data: updated,
    });
  }
});

//

//
// Delete Cart
exports.deleteCart = tryCatch(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.params.id });
  if (!cart) {
    return next(new AppError("No cart found with this id", 404));
  }

  updated = await Cart.findOneAndDelete({ userId: req.params.id });

  res.status(201).json({
    status: "success",
    data: updated,
  });
});

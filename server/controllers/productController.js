const Product = require("../models/productModel");
const AppError = require("./../utils/AppError");
const tryCatch = require("./../utils/tryCatch");
const APIFeatures = require("./../utils/apiFeatures");

// Get All Product
exports.getAllProduct = tryCatch(async (req, res) => {
  // Execute Query
  const features = new APIFeatures(Product.find(), req.query)
    .filter()
    .sorting()
    .limitFields()
    .pagination();
  const data = await features.query;

  res.status(200).json({
    status: "success",
    count: data.length,
    Data: data,
  });
});

// Get Product By Id
exports.getProduct = tryCatch(async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return next(new AppError("No product found with this id", 404));
  }
  res.status(200).json({
    status: "success",
    data: product,
  });
});

// Add Product
exports.addProduct = tryCatch(async (req, res) => {
  const body = req.body;
  delete body.edit;

  const product = await Product.create(req.body);
  console.log(product);
  res.status(200).json({
    status: "success",
    data: product,
  });
});

// Update Product
exports.updateProduct = tryCatch(async (req, res, next) => {
  const body = req.body;
  delete body.edit;
  const data = await Product.findById(req.params.id);

  if (data?.edit == "false") {
    return next(
      new AppError(
        "Unauthorized:You not authorized to update and delete this product, Please create your own product for Updating and Deleting.",
        401
      )
    );
  }
  const query = Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).select("-edit");
  const product = await query;

  if (!product) {
    return next(new AppError("No product found with this id", 404));
  }
  res.status(200).json({
    status: "success",
    data: product,
  });
});

// Delete Product
exports.deleteProduct = tryCatch(async (req, res, next) => {
  const data = await Product.findById(req.params.id);

  if (data?.edit == "false") {
    return next(
      new AppError(
        "Unauthorized:You not authorized to update and delete this product, Please create your own product for Updating and Deleting.",
        401
      )
    );
  }
  const query = Product.findByIdAndDelete(req.params.id).select("-edit");
  const product = await query;
  if (!product) {
    return next(new AppError("No product found with this id", 404));
  }
  res.status(200).json({
    status: "success",
    deleted: product,
  });
});

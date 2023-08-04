const Product = require("../models/productModel");
const AppError = require("./../utils/AppError")
const tryCatch = require("./../utils/tryCatch")
const APIFeatures = require("./../utils/apiFeatures")




// Get All Product
exports.getAllProduct = tryCatch(async (req, res) => {
    // Execute Query
    const features = new APIFeatures(Product.find(), req.query).filter().sorting().limitFields().pagination();
    const data = await features.query

    res.status(200).json({
        status: "success",
        count: data.length,
        Data: data
    })

})


// Get Product By Id
exports.getProduct = tryCatch(async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        return next(new AppError("No product found with this id", 404))
    }
    res.status(200).json({
        status: "success",
        data: product

    })


})

// Add Product
exports.addProduct = tryCatch(async (req, res) => {

    const product = await Product.create(req.body);
    res.status(200).json({
        status: "success",
        data: product
    })


})

// Update Product
exports.updateProduct = tryCatch(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!product) {
       
        return next(new AppError("No product found with this id", 404))
    }
    res.status(200).json({
        status: "success",
        data: product
    })


})

// Delete Product
exports.deleteProduct = tryCatch(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
        return next(new AppError("No product found with this id", 404))
    }
    res.status(200).json({
        status: "success",
        deleted: product
    })


})
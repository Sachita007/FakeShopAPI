const User = require("./../models/userModel")
const AppError = require("./../utils/AppError")
const tryCatch = require("./../utils/tryCatch")
const APIFeatures = require("./../utils/apiFeatures")




// Get All User
exports.getAllUsers = tryCatch(async (req, res) => {
    const features = new APIFeatures(User.find(), req.query).sorting().limitFields().pagination();
    const data = await features.query

    res.status(200).json({
        status: "success",
        count: data.length,
        Data: data
    })

})

// Get user By Id
exports.getUser = tryCatch(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id).select('-isAdmin');
    if (!user) {
        return next(new AppError("No User found with this id", 404))
    }
    res.status(200).json({
        status: "success",
        data: user

    })
})


// Add User
exports.addUser = tryCatch(async (req, res, next) => {
    const data = await User.findOne({ email: req.body.email }, { email: 1 })
    if (data) {
        {
            return next(new AppError("Email exist", 409))
        }
    }
    const body = req.body
    delete body.isAdmin
    const user = await User.create(body)

    res.status(200).json({
        status: "success",
        data: {
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            photo: user.photo
        }
    })
})

const AppError = require("./../utils/AppError")



const handleJWTError = err => {
    return new AppError('Invalid Token , Please login', 401)
}

const handleCastErrorDB = err => {
    message = `Invalid ${err.path}:${err.value}`
    return new AppError(message, 400)
}
const handleJWTExpiredError = err => {
    return new AppError('Token Expired, Please login again', 401)
}

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err, res) => {
    //operational , trusted error : send message to client
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    // Programmer or other unknown error: dont't leak error details
    else {
        // 1) Log the error
        console.log('Error', err);

        // 2) Send generic message
        res.status(500).json({
            status: 'error',
            message: 'Something went very worng',
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // if (process.env.NODE_ENV === 'devlopment') {
    //     sendErrorDev(err, res);
    // } else if (process.env.NODE_ENV === 'production') {
    //     let error = { ...err }
    //     if (err.name === 'CastError') error = handleCastErrorDB(error)
    //     if (err.name === 'JsonWebTokenError') error = handleJWTError()
    //     if (err.name === 'TokenExpiredError') error = handleJWTExpiredError()
    //     sendErrorProd(error, res);

    // }

    let error = { ...err }

    if (err.name === "ValidationError") {
        res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
    if (err.name === 'CastError') error = handleCastErrorDB(error)
    if (err.name === 'JsonWebTokenError') err = handleJWTError(err)
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError()
    sendErrorProd(err, res);
};

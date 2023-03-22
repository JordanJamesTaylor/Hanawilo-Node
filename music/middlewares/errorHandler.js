const errorHandler = (err, req, res, next) => {
    // errors
    console.log(err.stack);
    // set error status and message
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error'
    })
}

module.exports = errorHandler;
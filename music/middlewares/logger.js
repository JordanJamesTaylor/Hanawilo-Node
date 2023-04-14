/*
    Logs user request:
        method --> CRUD
        protocol --> HTTP/HTTPS
        original URL --> HOST
*/
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next(); // move to next middleware
}

module.exports = logger;
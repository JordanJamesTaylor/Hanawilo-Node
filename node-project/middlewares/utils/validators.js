const adminValidator = (req, res, next) => {
    if(req.user.admin) {
        next();
    } else {
        res
        .status(401)
        .setHeader('Content-Type', 'application/json')
        .json({ message: 'Unauthorized to acces this resource!' });
    }
}

module.exports = adminValidator;
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const protectedRoute = async (req, res, next) => {
    let token;
    // look for user token in headers obj -> value is string that starts with Bearer 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        // if headers.authorization has a value, remove Bearer to get just the users token
        token = req.headers.authorization.split(' ')[1];
    };

    if (!token) throw new Error('Not authorized to access this route')

    try {
        // verify
        // arg1 = token sent by client
        // arg2 = secret stored in DB
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = await User.findById(decoded.id);

        next();
    } catch (err) {
        throw new Error('Error processing the jwt token!');
    }
}

module.exports = protectedRoute;
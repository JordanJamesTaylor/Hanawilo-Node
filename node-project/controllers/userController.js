const User = require('../models/User');

const getUsers = async (req, res ,next) => {
    // if(Object.keys(req.query).length){
    //     const user = req.query.user
    //     console.log(`Searching for user ${user}`);
    // }
    
    try {
        const users = await User.find();
        
        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(users);
    } catch (err) {
        next(err);
    }
}

const postUser = async (req, res, next) =>{
    try {
        const user = await User.create(req.body);
        // invoke helper fn
        sendTokenResponse(user, 201, res);
    } catch (err) {
        next(err);
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const deletedUsers = await User.deleteMany();

        res
        .status(204)
        .setHeader('content-type', 'application/json')
        .json(deletedUsers);
    } catch (err) {
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(user);
    } catch (err) {
        next(err);
    }
}

const putUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true});

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(user);
    } catch (err) {
        next(err);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)

        res
        .status(204)
        .setHeader('contetn-type', 'application/json')
        .json(deletedUser);
    } catch (err) {
        next(err);
    }
}
// helper fn
const sendTokenResponse = (user, statusCode, res) => {
    // create JWT token
    const token = user.getSignedJwtToken(); 
    // set cookie properties 
    const options = {
        // taken current time and add cookie expiration (env set to 20 ms)
        // 24h * 60m * 60s * 1000ms
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        // prevents cross site scripting
        httpOnly: true
    }

    // .cookie() to send cookie
    // arg1 = set name of cookie
    // arg2 = token value
    // arg3 = options for cookie
    res
    .status(statusCode)
    .cookie('token', token, options)
    .json(token);
}

module.exports = {
    getUsers,
    deleteUsers,
    postUser,
    getUser,
    putUser,
    deleteUser
}
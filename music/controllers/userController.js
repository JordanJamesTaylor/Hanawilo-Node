const User = require('../models/User');

const getUsers = async (req, res, next) => {
    // sorting query param
    const filter = {};
    // pagination query param
    const options = {};

    if(Object.keys(req.query).length){ // check if params were sent
        const { // destructure query params
            sortByAge,
            userName,
            age,
            limit
        } = req.query;
        // if data was sent, instantiate key for filter
        // mongoose -> anything truthy will be returned
        if(userName) filter.userName = true;
        if(age) filter.age = true;
        // check for pagination
        if(limit) options.limit = limit;
        if(sortByAge) options.sort = {
            // sort in ascending or descending order
            // age: sortByAge === 'asc' ? 'ascending' : 'descending'
            // age: sortByAge === 'asc' ? '1' : '-1'
            age: sortByAge
        }
        // console.log("---HERE---");
        // console.log("FILTER: ", filter);
        // console.log("OPTIONS: ", options);
    }
    /*
        arg1 = search for item by ID
        arg2 = return item with specific fields (i.e. just userName)
        arg3 = pagination and sorting

        pass in empty object as we already have an endpoint to look for user by ID
    */
    try {
        const result = await User.find({}, filter, options);

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const result = await User.deleteMany();

        res
        .status(200) // use 200 to display message in postman rather than 204
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try{
        const result = await User.findById(req.params.userId);
        
        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const createUser = async (req, res, next) => {
    try {
        const result = await User.create(req.body);

        sendTokenResponse(result, 201, res);
    } catch (err) {
        next(err);
    }
}

const putUser = async (req, res, next) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });

        res
        .status(202)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const result = await User.findByIdAndDelete(req.params.userId);

        res
        .status(200) // use 200 to display message in postman rather than 204
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    } 
}

const login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) throw new Error('Please provide email and password.');

    const user = await User.findOne({ email }).select('+password');

    if(!user) throw new Error('Invalid Credentials');

    const isMatch = await user.matchPassword(password);

    if(!isMatch) throw new Error('Invalid Credentials.');

    sendTokenResponse(user, 200, res);
}

const sendTokenResponse = async (user, statusCode, res) => {
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true 
    };

    res
    .status(statusCode)
    .cookie('token', token, options)
    .json(token);
}

module.exports = {
    getUsers,
    deleteUsers,
    getUser,
    createUser,
    putUser,
    deleteUser,
    login
}

const User = require('../models/User');

const getUsers = async (req, res, next) => {
    // if(Object.keys(req.query).length){
    //     const {
    //         userName,
    //         gender
    //     } = req.query;
        
    //     const filter = [];
    
    //     if(userName) filter.push(userName);
    //     if(gender) filter.push(gender);
    
    //     for(const el of filter){
    //         console.log(`Searching users by: ${query}`)
    //     }
    // }

    try {
        const result = await User.find();

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

const postUser = async (req, res, next) => {
    try {
        const result = await User.create(req.body);

        res
        .status(201)
        .setHeader('content-type', 'application/json')
        .json(result);
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

module.exports = {
    getUsers,
    deleteUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
}
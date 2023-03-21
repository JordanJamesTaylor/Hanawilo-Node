const User = require('../models/User');

const getUsers = async (req, res ,next) => {
    if(Object.keys(req.query).length){
        const user = req.query.user
        console.log(`Searching for user ${user}`);
    }
    
    try {
        const users = await User.find();
        
        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(users)
    } catch (err) {
        next(err);
    }
}

const postUser = async (req, res, next) =>{
    try {
        const user = await User.create(req.body);

        res
        .status(201)
        .setHeader('content-type', 'application/json')
        .json(user)
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
        .json(deletedUsers)
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
        .json(user)
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
        .json(user)
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
        .json(deletedUser)
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUsers,
    deleteUsers,
    postUser,
    getUser,
    putUser,
    deleteUser
}
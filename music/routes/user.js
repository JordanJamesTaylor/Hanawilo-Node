const express = require('express');
const router = express.Router();
const {
    getUsers,
    deleteUsers,
    getUser,
    createUser,
    putUser,
    deleteUser,
    login
} = require('../controllers/userController');

const adminValidator = require('../middlewares/utils/validator');
const protectedRoute = require('../middlewares/auth');

router.route('/')
    .get(adminValidator, protectedRoute, getUsers)
    .post(createUser)
    .delete(protectedRoute, deleteUsers)

router.route('/login')
    .post(login);

router.route('/:userId')
    .get(getUser)
    .put(protectedRoute, putUser)
    .delete(protectedRoute, deleteUser)

module.exports = router;
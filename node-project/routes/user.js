const express = require('express');
const router = express.Router();
const {
    getUsers,
    deleteUsers,
    postUser,
    getUser,
    putUser,
    deleteUser,
} = require('../controllers/userController.js');

// validation middleware
const adminValidator = require('../middlewares/utils/validators.js');
// authorization middleware
const protectedRoute = require('../middlewares/auth.js');

router.route('/')
    .get(adminValidator, protectedRoute, getUsers)
    .post(postUser)
    .delete(protectedRoute, deleteUsers)

router.route('/:userId')
    .get(protectedRoute, getUser)
    .put(protectedRoute, putUser)
    .delete(protectedRoute, deleteUser)

module.exports = router;
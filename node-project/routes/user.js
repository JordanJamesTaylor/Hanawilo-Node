const express = require('express');
const router = express.Router();
const {
    getUsers,
    deleteUsers,
    postUser,
    getUser,
    putUser,
    deleteUser
} = require('../controllers/userController.js');

router.route('/')
    .get(getUsers)
    .post(postUser)
    .delete(deleteUsers)

router.route('/userId')
    .get(getUser)
    .post(postUser)
    .put(putUser)
    .delete(deleteUser)

module.exports = router;
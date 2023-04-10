const express = require('express');
const router = express.Router();
const {
    getUsers,
    deleteUsers,
    getUser,
    createUser,
    putUser,
    deleteUser
} = require('../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser)
    .delete(deleteUsers)

router.route('/:userId')
    .get(getUser)
    .put(putUser)
    .delete(deleteUser)

module.exports = router;
const express = require('express');
const router = express.Router();

const {
    getItems,
    deleteItems,
    postItem,
    getItem,
    putItem,
    deleteItem
} = require('../controllers/itemController');

router.route('/')
    .get(getItems)
    .post(postItem)
    .delete(deleteItems)

router.route('/itemId')
    .get(getItem)
    .put(putItem)
    .delete(deleteItem)

module.exports = router;
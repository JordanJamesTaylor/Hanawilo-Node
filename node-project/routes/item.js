const express = require('express');
const router = express.Router();

const {
    getItems,
    deleteItems,
    postItem,
    getItem,
    putItem,
    deleteItem,
    getItemRatings,
    postItemRating,
    deleteItemRatings,
    getItemRating,
    updateItemRating,
    deleteItemRating,
    postItemImage
} = require('../controllers/itemController');

// can only be accessed if they have a token
const protectedRoute = require('../middlewares/auth'); 

router.route('/')
    .get(getItems)
    .post(protectedRoute, postItem)
    .delete(protectedRoute, deleteItems)

router.route('/:itemId')
    .get(getItem)
    .put(protectedRoute, putItem)
    .delete(protectedRoute, deleteItem)

router.route('/:itemId/image')
    .post(postItemImage)

router.route('/:itemId/ratings')
    .get(getItemRatings)
    .post(protectedRoute, postItemRating)
    .delete(protectedRoute, deleteItemRatings)

router.route('/:itemId/ratings/:ratingId')
    .get(getItemRating)
    .put(protectedRoute, updateItemRating)
    .delete(protectedRoute, deleteItemRating)

module.exports = router;
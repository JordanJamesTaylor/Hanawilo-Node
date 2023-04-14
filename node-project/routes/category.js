const express = require('express');
const router = express.Router();
const {
    getCategories,
    deleteCategories,
    getCategory,
    postCategory,
    putCategory,
    deleteCategory
} = require('../controllers/categoryController.js');

const protectedRoute = require('../middlewares/auth.js');

router.route('/')
    .get(getCategories)
    .post(protectedRoute, postCategory)
    .delete(protectedRoute, deleteCategories);

router.route(`/:categoryId`)
    .get(getCategory)
    .put(protectedRoute, putCategory)
    .delete(protectedRoute, deleteCategory);

module.exports = router;
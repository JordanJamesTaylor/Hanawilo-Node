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

router.route('/')
    .get(getCategories)
    .post(postCategory)
    .delete(deleteCategories);

router.route(`/:categoryId`)
    .get(getCategory)
    .post(postCategory)
    .put(putCategory)
    .delete(deleteCategory);

module.exports = router;
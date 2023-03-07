const express = require('express');
const router = express.Router();
const {
    getCategories,
    createCategory,
    putCategory,
    deleteCategories
} = require('../controllers/categoryController.js');

router.route('/')
    .get(getCategories)
    .post(createCategory)
    .put(putCategory)
    .delete(deleteCategories)

module.exports = router;
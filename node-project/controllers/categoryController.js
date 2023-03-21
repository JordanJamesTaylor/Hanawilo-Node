// SET CONTROLLER METHODS INVOKED BY ROUTE USED 
// TAKES IN A REQUEST FROM A CLIENT THEN DELEGATES AND TALKS TO THE DATABASE
const Category = require('../models/Category');

const getCategories = async (req, res, next) => {
    if(Object.keys(req.query).length){
        const category = req.query.category
        console.log(`Searching for category ${category}`);
    }

    try {
        // return every category from DB
        const categories = await Category.find();
        
        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(categories) // payload to be sent
    } catch (err) {
        // goes to errorHandler middleware
        next(err);
    }
}

const postCategory = async (req, res, next) => {
    try {
        // payload user sent 
        const category = await Category.create(req.body)

        res
        .status(201)
        .setHeader('content-type', 'application/json')
        .json(category)
    } catch (err) {
        next(err);
    } 
}

const deleteCategories = async (req, res, next) => {
    try {
        const deletedCategories = await Category.deleteMany();

        res
        .status(204)
        .setHeader('content-type', 'application/json')
        .json(deletedCategories)
    } catch (err) {
        next(err);
    }
}

const getCategory = async (req, res, next) => {
    try {
        // uses ID in request params
        const category = await Category.findById(req.params.categoryId);

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(category)
    } catch (err) {
        next(err);
    }

}

const putCategory = async (req, res, next) => {
    try {
        // arg 1 = uses ID in request params
        // arg 2 = rest of payload
        // arg 3 = mark to send new doc only rather than the old one
        const category = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true });

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(category)
    } catch (err) {
        next(err);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.categoryId)
        
        res
        .status(204)
        .setHeader('contetn-type', 'application/json')
        .json(deletedCategory)
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getCategories, 
    deleteCategories,
    postCategory, 
    putCategory, 
    getCategory,
    deleteCategory
}
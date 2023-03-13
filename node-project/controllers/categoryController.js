// SET CONTROLLER METHODS INVOKED BY ROUTE USED 
// TAKES IN A REQUEST FROM A CLIENT THEN DELEGATES AND TALKS TO THE DATABASE
const getCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: 'You HIT ME! Show me all the categories!' })
}

const deleteCategories = (req, res, next) => {
    res
    .status(204)
    .setHeader('content-type', 'application/json')
    .json({ message: 'Deleting categories!' })
}

const postCategory = (req, res, next) => {
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: `Create category with category name of ${req.body.categoryName} and gender ${req.body.gender} `})
}

const getCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `Show me the category with category ID ${req.params.categoryId}` })
}

const putCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `Updated the category with ID ${req.params.categoryId}` })
}

const deleteCategory = (req, res, next) => {
    res
    .status(204)
    .setHeader('contetn-type', 'application/json')
    .json({ message: `Delted the category with category ID ${req.params.categoryId}` })
}

module.exports = {
    getCategories, 
    deleteCategories,
    postCategory, 
    putCategory, 
    getCategory,
    deleteCategory
}
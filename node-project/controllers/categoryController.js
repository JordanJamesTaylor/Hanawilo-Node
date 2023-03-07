// SET CONTROLLER METHODS INVOKED BY ROUTE USED 
// TAKES IN A REQUEST FROM A CLIENT THEN DELEGATES AND TALKS TO THE DATABASE
const getCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: 'You HIT ME! Show me all the categories!' })
}

const createCategory = (req, res, next) => {
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: `Create category with category name of ${req.body.categoryName} and gender ${req.body.gender} `})
}

const putCategory = (req, res, next) => {
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

module.exports = {
    getCategories, 
    createCategory, 
    putCategory, 
    deleteCategories
}
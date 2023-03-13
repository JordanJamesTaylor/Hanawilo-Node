const getItems = (req, res ,next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: 'Show me all the items!'})
}

const deleteItems = (req, res, next) => {
    res
    .status(204)
    .setHeader('content-type', 'application/json')
    .json({ message: 'Items deleted.'})
}

const postItem = (req, res, next) =>{
    res
    .status(201)
    .setHeader('content-type', 'application/json')
    .json({ message: 'Item added.'})
}

const getItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `Show me the Item with item ID ${req.params.itemId}` })
}

const putItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('content-type', 'application/json')
    .json({ message: `Updated the item with ID ${req.params.itemId}` })
}

const deleteItem = (req, res, next) => {
    res
    .status(204)
    .setHeader('contetn-type', 'application/json')
    .json({ message: `Delted the item with Item ID ${req.params.itemId}` })
}


module.exports = {
    getItems,
    deleteItems,  
    postItem,
    getItem,
    putItem,
    deleteItem
}
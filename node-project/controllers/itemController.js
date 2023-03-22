const Item = require('../models/Item');

const getItems = async (req, res ,next) => {
    // if(Object.keys(req.query).length){
    //     const {
    //         gender,
    //         price,
    //         isClearance,
    //         colors,
    //         sizes
    //     } = req.query;
    
    //     const filter = [];

    //     if(gender) filter.push(gender);
    //     if(price) filter.push(price);
    //     if(isClearance) filter.push(isClearance);
    //     if(colors) filter.push(colors);
    //     if(sizes) filter.push(sizes);
    
    //     for(const query of filer){
    //         console.log(`Searching item by ${query}`);
    //     }
    // }

    try {
        const items = await Item.find(); 

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(items)
    } catch (err) {
        next(err);
    }
}

const postItem = async (req, res, next) =>{
    try {
        const item = await Item.create(req.body);

        res
        .status(201)
        .setHeader('content-type', 'application/json')
        .json(item)
    } catch (err) {
        next(err);
    }
}

const deleteItems = async (req, res, next) => {
    try {
        const deletedItem = await Item.deleteMany();

        res
        .status(204)
        .setHeader('content-type', 'application/json')
        .json(deletedItem)
    } catch (err) {
        next(err);
    }
}

const getItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.itemId)

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(item)
    } catch (err) {
        next(err);
    }
}

const putItem = async (req, res, next) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.itemId, req.body, { new: true })

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(item)
    } catch (err) {
        next(err);
    }
}

const deleteItem = async (req, res, next) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.itemId)

        res
        .status(204)
        .setHeader('contetn-type', 'application/json')
        .json(deletedItem)
    } catch (err) {
        next(err);
    }
}


module.exports = {
    getItems,
    deleteItems,  
    postItem,
    getItem,
    putItem,
    deleteItem
}
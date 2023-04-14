const Item = require('../models/Item');
const path = require('path'); // mongoDB package that allows us to read paths from local machine

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

const getItemRatings = async (req, res, next) => {
    try {
        const result = await Item.findById(req.params.itemId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result.ratings);
    } catch (err) {
        next(err);
    }
}

const postItemRating = async (req, res, next) => {
    try{ 
        const result = await Item.findById(req.params.itemId);
        result.ratings.push(req.body);

        // asynchronous save new rating to DB
        await result.save();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const deleteItemRatings = async (req, res, next) => {
    try {
        const result = await Item.findById(req.params.itemId);
        result.ratings = [];

        await result.save();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `Deleted all ratings for song with ID of ${req.params.songId}`})
    } catch (err) {
        next(err);
    }
}

const getItemRating = async (req, res, next) => { // validation
    try {
        const item = await Item.findById(req.params.itemId);
        // search for rating by the mongoDB's unique ID data type --> it is not a JS data type
        // as it isn't JS we have to use mondDB's equals method which compares IDs
        let rating = item.ratings.find(rating => (rating._id).equals(req.params.ratingId));

        if(!rating) rating = { message: `No rating found with ID: ${req.params.ratingId}` };

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating);
    } catch (err) {
        next(err);
    }
}

const updateItemRating = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.itemId);
        // item.ratings is an array of objects
        let rating = item.ratings.find(rating => (rating._id).equals(req.params.ratingId));

        if(rating){
            const ratingIndexPosition = item.ratings.indexOf(rating);
            item.ratings.splice(ratingIndexPosition, 1, req.body.rating);
            // rating = item.ratings[ratingIndexPosition];
            // rating._id = req.params.ratingId;
            rating = req.body;
            await item.save();
        }else{
            rating = { message: `No rating found with ID: ${req.params.ratingId}` };
        }

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating);
    } catch (err) {
        next(err);
    }
}

const deleteItemRating = async (req, res, next) => {
    try {
        const item = Item.findById(req.params.itemId);
        let rating = item.ratings.find(rating => (rating._id).equals(req.params.ratingId));

        if(rating){
            const indexRatingPosition = item.ratings.indexOf(rating);
            item.ratings.splice(indexRatingPosition, 1);
            rating = { message: `Successfully deleted rating with ID: ${req.params.ratingId}`};
            await item.save();
        } else {
            rating = { message: `No rating found with ID: ${req.params.ratingId}`};
        }

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating);
    } catch (err) {
        next(err);
    }
}

const postItemImage = async (req, res, next) => {
    try {
        // validate the file(s)
        const err = { message: 'Error uploading image'};
        if(!req.files) next(err);

        const file = req.files.file;

        if(!file.mimetype.startsWith('image')) next(err);
        if(file.size > process.env.MAX_FILE_SIZE) next(err);
        // grab the file extension and change file name
        file.name = `photo_${req.params.itemId}${path.parse(file.name).ext}`;
        // file path to save uploaded file
        const filePath = process.env.FILE_UPLOAD_PATH + file.name;
        // move file to public/uploads using env FILE_UPLOAD_PATH value
        file.mv(filePath, async (err) => {
            // set image property set in schema to the file name of the uploaded file
            await Item.findByIdAndUpdate(req.params.itemId, { image: file.name });
            
            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ message: 'Image uploaded!' });
        });
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
    deleteItem,
    getItemRatings,
    postItemRating,
    deleteItemRatings,
    getItemRating,
    updateItemRating,
    deleteItemRating,
    postItemImage
}
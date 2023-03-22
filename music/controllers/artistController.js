const Artist = require('../models/Artist');

const getArtists = async (req, res, next) => {
    // if(Object.keys(req.query).length){
    //     const {
    //         firstName,
    //         lastName,
    //         genre
    //     } = req.query.firstName;
        
    //     const filter = [];
    
    //     if(firstName) filter.push(firstName);
    //     if(lastName) filter.push(lastName);
    //     if(genre) filter.push(genre);
    
    //     for(const el of filter){
    //         console.log(`Searching artists by: ${query}`);
    //     }
    // }

    try {
        const result = await Artist.find();

        res
        .status(200) // default status code\\\\\\\\\\
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const deleteArtists = async (req, res, next) => {
    try {
        const result = await Artist.deleteMany();

        res
        .status(200) // use 200 to display message in postman rather than 204
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const getArtist = async (req, res, next) => {
    try {
        const result = await Artist.findById(req.params.artistId);

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const postArtist = async (req, res, next) => {
    try {
        const result = await Artist.create(req.body);

        res
        .status(201)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const putArtist = async (req, res, next) => {
    try {
        const result = await Artist.findByIdAndUpdate(req.params.artistId, req.body, { new: true });

        res
        .status(202)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const deleteArtist = async (req, res, next) => {
    try {
        const result = await Artist.findByIdAndDelete(req.params.artistId);

        res
        .status(200) // use 200 to display message in postman rather than 204
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getArtists,
    deleteArtists,
    getArtist,
    postArtist,
    putArtist,
    deleteArtist
}
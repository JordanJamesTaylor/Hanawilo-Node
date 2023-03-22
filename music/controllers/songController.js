const Song = require('../models/Song');

const getSongs = async (req, res, next) => {
    // if(Object.keys(req.query).length){
    //     const {
    //         songTitle,
    //         artist,
    //         genre
    //     } = req.query.genre
        
    //     const filter = [];
        
    //     if(songTitle) filter.push(songTitle);
    //     if(artist) filter.push(artist);
    //     if(genre) filter.push(genre);
    
    //     for(const el of filter){
    //         console.log(`Searching songs by: ${query}`);
    //     }
    // }

    try {
        const result = await Song.find();
    
        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(result); 
    } catch (err) {
        next(err);
    }
}

const deleteSongs = async (req, res, next) => {
    try {
        const result = await Song.deleteMany();

        res
        .status(200) // use 200 to display message in postman rather than 204
        .setHeader('Content-Type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const getSong = async (req, res, next) => {
    try {
        const result = await Song.findById(req.params.songId);

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const postSong = async (req, res, next) => {
    try {
        const result = await Song.create(req.body);

        res
        .status(201)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err){
        next(err);
    }
}

const putSong = async (req, res, next) => {
    try {
        const result = await Song.findByIdAndUpdate(req.params.songId, req.body, { new: true });

        res
        .status(202)
        .setHeader('content-type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
}

const deleteSong = async (req, res, next) => {
    try {
        const result = await Song.findByIdAndDelete(req.params.songId);

        res
        .status(200) // use 200 to display message in postman rather than 204
        .setHeader('Content-Type', 'application/json')
        .json(result);
    } catch (err) {
        next(err);
    }
    
}

module.exports = {
    getSongs,
    deleteSongs,
    postSong,
    getSong,
    putSong,
    deleteSong
}
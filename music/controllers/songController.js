const Song = require('../models/Song');

const getSongs = async (req, res, next) => {
    const filter = {};
    const options = {};

    if(Object.keys(req.query).length){
        const {
            sortByArtist,
            songTitle,
            artist,
            genre,
            limit
        } = req.query;
    
        if(songTitle) filter.songTitle = true;
        if(artist) filter.artist = true;
        if(genre) filter.genre = true;
        if(limit) options.limit = limit;
        if(sortByArtist) options.sort = {
            artist: sortByArtist
        }
    }

    try {
        const result = await Song.find({}, filter, options);
    
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

const createSong = async (req, res, next) => {
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

const getSongRatings = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId);
        let rating = song.ratings.find((rating._id).equals(req.params.ratingId));

        if(!rating) rating = { message: `No rating found with ID: ${req.params.ratingId}` };

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating);
    } catch (err) {
        next(err);
    }
}

const updateSongRating = async (req, res, next) => {
    try{ 
        const song = await Song.findById(req.params.songId);
        let rating = song.ratings.find((rating._id).equals(req.params.ratingId));

        if(rating){
            const ratingIndexPosition = song.ratings.indexOf(rating);
            song.ratings.splice(ratingIndexPosition, 1, req.body);
            rating = req.body;
            // asynchronous save new rating to DB
            await song.save();

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

const deleteSongRating = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId);
        let rating = song.ratings.fing((rating._id).equals(req.params.ratingId));

        if(rating){
            const ratingIndexPosition = song.ratings.indexOf(rating);
            song.ratings.splice(ratingIndexPosition, 1);

            rating = { message: 'Rating successfully deleted.'};

            await song.save();
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

module.exports = {
    getSongs,
    deleteSongs,
    createSong,
    getSong,
    putSong,
    deleteSong,
    getSongRatings,
    updateSongRating,
    deleteSongRating
}

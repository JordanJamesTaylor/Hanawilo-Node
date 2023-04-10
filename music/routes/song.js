const express = require('express');
const router = express.Router();
const {
    getSongs,
    deleteSongs,
    createSong,
    getSong,
    putSong,
    deleteSong,
    getSongRatings,
    updateSongRating,
    deleteSongRating
}   = require('../controllers/songController');

router.route('/')
    .get(getSongs)
    .post(createSong)
    .delete(deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(putSong)
    .delete(deleteSong)

router.route('/:songId/ratings/ratingsId')
    .get(getSongRatings)
    .put(updateSongRating)
    .delete(deleteSongRating)

module.exports = router;
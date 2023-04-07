const express = require('express');
const router = express.Router();
const {
    getSongs,
    deleteSongs,
    postSong,
    getSong,
    putSong,
    deleteSong,
    getSongRatings,
    postSongRating,
    deleteSongRating
}   = require('../controllers/songController');

router.route('/')
    .get(getSongs)
    .post(postSong)
    .delete(deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(putSong)
    .delete(deleteSong)

router.route('/:songId/ratings')
    .get(getSongRatings)
    .put(postSongRating)
    .delete(deleteSongRating)

module.exports = router;
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

const protectedRoute = require('../middlewares/auth');

router.route('/')
    .get(getSongs)
    .post(protectedRoute, createSong)
    .delete(protectedRoute, deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(protectedRoute, putSong)
    .delete(protectedRoute, deleteSong)

router.route('/:songId/ratings/ratingsId')
    .get(getSongRatings)
    .put(updateSongRating)
    .delete(deleteSongRating)

module.exports = router;
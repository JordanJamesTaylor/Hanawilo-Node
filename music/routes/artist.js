const express = require('express');
const router = express.Router();
const {
    getArtists,
    deleteArtists,
    getArtist,
    createArtist,
    putArtist,
    deleteArtist,
    postArtistImage
} = require('../controllers/artistController');

const protectedRoute = require('../middlewares/auth');

router.route('/')
    .get(getArtists)
    .post(protectedRoute, createArtist)
    .delete(protectedRoute, deleteArtists)

router.route('/:artistId')
    .get(getArtist)
    .put(protectedRoute, putArtist)
    .delete(protectedRoute, deleteArtist)


router.route('/:artistId/image')
    .post(protectedRoute, postArtistImage)

module.exports = router;
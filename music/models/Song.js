const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        require: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId, // mongoDB data type connecting this schema to the ref-ed model
        ref: 'User'
    }
},{
    timestamps: true
});

const SongSchema = new Schema({
    songTitle: {
        type: String,
        required: true,
        maxLength: 20
    },
    artist: {
        type: String,
        unique: true,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    ratings: [RatingSchema] // adding ratings schema to this song instance
},{
    timestamps: true
});

module.exports = mongoose.model("Song", SongSchema);
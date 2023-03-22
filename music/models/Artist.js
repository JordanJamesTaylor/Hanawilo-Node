const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 20
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 20
    },
    genre: {
        type: String
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Artist", artistSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        maxLength: 100
    },
    itemDescription: {
        type: String,
        required: true,
        maxLength: 2000
    },
    gender: {
        type: String,
        required: true,
        enu: [
            'Male',
            'Female',
            'male',
            'female'
        ]
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    isClearance: {
        type: Boolean,
        default: false
    },
    colors: {
        type: [String], // arr of strings
        required: true
    },
    sizes: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Item', ItemSchema);
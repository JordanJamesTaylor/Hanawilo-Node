const mongoose = require('mongoose');
// pull schema class from mongoose
const Schema = mongoose.Schema;
// first arg = obj with properties to build schema
// second arg = obj setting timestamps
const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
        maxLength: 25
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'Male',
            'Female',
            'male',
            'female'
        ]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
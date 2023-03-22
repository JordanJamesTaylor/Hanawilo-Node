const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        maxLength: 10
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'male',
            'female',
        ]
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        maxLenght: 10
    },
    lastName: {
        type: String,
        required: true,
        maxLenght: 10
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);
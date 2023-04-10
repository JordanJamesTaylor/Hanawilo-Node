const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        maxLength: 10,
        validate: (userName) => validator.trim(userName)
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
        required: true,
        validate: (email) => validator.isEmail(email)
    },
    password: {
        type: String,
        required: true,
        validate: (password) => validator.isStrongPassword(password)
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
});
// executes after controller but before reaching the DB 
// before saving to DB...
UserSchema.pre('save', function(next){
    this.userName = this.userName.trim();
    this.firstName = this.firstName.trim();
    this.lastName = this.lastName.trim();

    next();
});

// executes after pre hooks
UserSchema.post('save', function(){
    this.gender = this.gender.toUpperCase();
});

UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

module.exports = mongoose.model("User", UserSchema);
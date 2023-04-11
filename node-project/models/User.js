const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        maxLength: 15
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (email) => validator.isEmail(email)
    },
    password: {
        type: String,
        required: true,
        validate: (password) => validator.isStrongPassword(password)
    },
    admin: {
        type: Boolean,
        deafult: false,
    }
},{
    timestamps: true
})
// create a method for the user schema
// to create a job token for authorization
UserSchema.methods.getSignedJwtToken = function() {
    // arg1 = payload (in this case it's just the user ID)
    // arg2 = secret key
    // arg3 (optional) = obj to set token expiration 
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
        // when token should expire
        expiresIn: process.env.JWT_EXPIRE
    });
}

UserSchema.pre('save', async function(next){
    // if password wasn't change = login
    if(!this.isModified('password')) next();
    // salt = random set of strings
    // 10 = level of complexity added to hashed password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
})

UserSchema.methods.matchPassword = async function(enteredPassword){
    // comapre decrypt with the same hashing algorithm and compares the user sent password
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id: {
        type: String
    },
    logIn: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    __v: {
        type: Number
    }
},
    {
        timestamps: true
    }
);

const userModel = new mongoose.model('Users', userSchema);

module.exports = userModel;
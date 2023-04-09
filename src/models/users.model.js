const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id: {
        type: String,
        default: uuid.v4()
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    version: {
        type: Number
    }
},
    {
        timestamps: true
    }
);

const userModel = new mongoose.model('UserData', userSchema);

module.exports = userModel;
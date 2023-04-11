const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const albumSchema = Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    artistId: {
        type: String,
        default: null
    }
},
    {
        timestamps: true
    }
);

const albumModel = new mongoose.model('albums', albumSchema);

module.exports = albumModel;
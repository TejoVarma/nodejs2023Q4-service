const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const favSchema = Schema({
    _id: {
        type: String
    },
    artists: {
        type: [String],
    },
    albums: {
        type: [String]
    },
    tracks: {
        type: [String]
    },
},
    {
        timestamps: true
    }
);

const favModel = new mongoose.model('favourites', favSchema);

module.exports = favModel;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid')

const trackSchema = Schema({
    _id: {
        type : String,
        default : uuid.v4()
    },
    name: {
        type : String,
        required : true,
        unique : true
    },
    artistId: {
        type : String,
        default : null
    },
    albumId: {
        type : String,
        default : null
    },
    duration: {
        type : Number,
        required : true
    }
});

const trackModel = new mongoose.model("Tracks", trackSchema);

module.exports = trackModel;
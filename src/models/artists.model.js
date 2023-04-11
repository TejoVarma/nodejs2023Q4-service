const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const artistSchema = Schema({
    _id: {
        type: String,
        default: uuid.v4()
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    grammy: {
        type: Boolean,
        required: true
    }
},
    {
        timestamps: true
    }
);

const artistsModel = new mongoose.model('artists', artistSchema);

module.exports = artistsModel;
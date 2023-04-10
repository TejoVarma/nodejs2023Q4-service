const express = require('express');
const routers = express.Router();
const tracksController = require('../controllers/tracks.controller');

routers.post('/',tracksController.postNewTrack);
routers.get('/',tracksController.getAllTracks);
routers.get('/:id', tracksController.getTrackById);

module.exports = routers;
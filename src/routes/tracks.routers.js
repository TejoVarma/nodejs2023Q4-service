const express = require('express');
const routers = express.Router();
const tracksController = require('../controllers/tracks.controller');

routers.post('/',tracksController.postNewTrack);
routers.get('/',tracksController.getAllTracks);
routers.get('/:id', tracksController.getTrackById);
routers.put('/:id', tracksController.updateTrackInfo);

module.exports = routers;
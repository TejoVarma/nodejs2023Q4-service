const express = require('express');
const routers = express.Router();
const artistsController = require('../controllers/artists.controller');

routers.post('/', artistsController.newArtist);
routers.get('/', artistsController.getAllArtists);
routers.get('/:id', artistsController.getArtistById);
routers.put('/:id', artistsController.updateArtistInfo);
routers.delete('/:id', artistsController.deleteArtist);

module.exports = routers;
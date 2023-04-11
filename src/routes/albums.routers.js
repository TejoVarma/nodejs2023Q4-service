const express = require('express');
const routers = express.Router();
const albumsController = require('../controllers/albums.controller');

routers.post('/', albumsController.newAlbum);
routers.get('/', albumsController.getAllAlbums);
routers.get('/:id', albumsController.getAlbumById);
routers.put('/:id', albumsController.updateAlbumInfo);
routers.delete('/:id', albumsController.deleteAlbum);

module.exports = routers;
const express = require("express");
const routers = express.Router();
const favController = require('../controllers/favourites.controller');

routers.get("/", favController.getAllFav);
routers.post("/track/:id", favController.isFav,favController.favTrack);
routers.delete("/track/:id", favController.deleteFavTrack);
routers.post("/album/:id", favController.isFav,favController.favAlbum);
routers.delete("/album/:id", favController.deleteFavAlbum);
routers.post("/artist/:id", favController.isFav, favController.favArtist);
routers.delete("/artist/:id", favController.deleteFavArtist);

module.exports = routers;
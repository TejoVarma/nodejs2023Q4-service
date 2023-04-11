const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routers');
const trackRoutes = require('./routes/tracks.routers');
const artistRoutes = require('./routes/artists.routers');
const albumRoutes = require('./routes/albums.routers');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/user', userRoutes);
app.use('/track', trackRoutes);
app.use('/artist', artistRoutes);
app.use('/album', albumRoutes);

module.exports = app;
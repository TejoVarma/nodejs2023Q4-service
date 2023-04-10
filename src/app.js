const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routers');
const trackRoutes = require('./routes/tracks.routers');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/user', userRoutes);
app.use('/track', trackRoutes)

module.exports = app;
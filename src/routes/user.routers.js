const express = require('express');
const routers = express.Router();
const userControllers = require('../controllers/user.controller');

routers.post('/', userControllers.postNewUser);
routers.get('/', userControllers.getAllUsers);
routers.get('/:id', userControllers.getUserById);

module.exports = routers;
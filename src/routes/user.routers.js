const express = require('express');
const routers = express.Router();
const userControllers = require('../controllers/user.controller');

routers.post('/', userControllers.postNewUser);
routers.get('/', userControllers.getAllUsers);
routers.get('/:id', userControllers.getUserById);
routers.put('/:id', userControllers.changePassword);
routers.delete('/:id', userControllers.deleteUser);
module.exports = routers;
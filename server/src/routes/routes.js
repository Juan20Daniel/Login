const express = require('express');
const route = express.Router();
const addUser = require('../controllers/addUser');

route.post('/create-user', addUser.createUser);

module.exports = route;
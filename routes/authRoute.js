const express = require('express');
const route = express.Router()
const { loginUser, logout } = require('../controllers/authController')

route.post('/login', loginUser)
route.post('/logout', logout)


module.exports = route;
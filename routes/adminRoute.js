const express = require('express');
const route = express.Router();
const { getUsers, createAdmin, updateUser, deleteUser, createCategory, getCategories } = require('../controllers/adminController')
const { verifToken } = require('../middlewares/verifyToken')
const Admin = require('../models/Admin');

// route.get('/users', verifToken('admin'), getUsers);
route.post('/createAdmin', createAdmin);
route.post('/createCategory', verifToken('admin', Admin), createCategory)
route.get('/getCategory', verifToken('admin', Admin), getCategories)
// route.put('/update/:id', verifToken('admin'), updateUser);
// route.delete('/user/:id', verifToken('admin'), deleteUser)



module.exports = route;
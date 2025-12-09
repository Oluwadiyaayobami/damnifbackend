const express = require('express');
const {handlingregister,handlinglogin, handlinggoingtohome} = require('../controllers/appcontroller');
const homepagemiddlewaer = require('../middleware/homemiddleware.js')

routers = express.Router()


routers.post('/register',handlingregister)
routers.post('/login',handlinglogin)
routers.get('/home',homepagemiddlewaer,handlinggoingtohome)

module.exports =routers
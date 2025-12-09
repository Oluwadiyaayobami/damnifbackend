const express = require('express');
const {handlingregister,handlinglogin, handlinggoingtohome,handlingadmindashboard} = require('../controllers/appcontroller');
const homepagemiddlewaer = require('../middleware/homemiddleware.js');
const adminmiddlewaer = require('../middleware/adminmiddlewaer.js');

routers = express.Router()


routers.post('/register',handlingregister)
routers.post('/login',handlinglogin)
routers.get('/user-dashboard',homepagemiddlewaer,handlinggoingtohome),
routers.get('/admin',homepagemiddlewaer,adminmiddlewaer,handlingadmindashboard)
// not we can protect routhes by using middle wear the routhes can take mutiple middle weare as handler 

module.exports =routers
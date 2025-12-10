const express = require('express');
const {handlingregister,handlinglogin, handlinggoingtohome,handlingadmindashboard} = require('../controllers/appcontroller');
const homepagemiddlewaer = require('../middleware/homemiddleware.js');
const adminmiddlewaer = require('../middleware/adminmiddlewaer.js');

routers = express.Router()


routers.post('/register',handlingregister)
routers.post('/login',handlinglogin)// when login is scuessful an acess token is cerated for each user to stay login so we always have  toverify the token that where the middle waere comes in place 
routers.get('/user-dashboard',homepagemiddlewaer,handlinggoingtohome),
routers.get('/admin',homepagemiddlewaer,adminmiddlewaer,handlingadmindashboard)//middle waer  checks the user role 
// not we can protect routhes by using middle wear the routhes can take mutiple middle weare as handler 

module.exports =routers
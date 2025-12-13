const express = require('express');
const {handlingregister,handlinglogin, handlinggoingtohome,handlingadmindashboard,subscription,changingpassword, addinngnewpost, deletingpost, fetchingallpost} = require('../controllers/appcontroller');
const homepagemiddlewaer = require('../middleware/homemiddleware.js');
const adminmiddlewaer = require('../middleware/adminmiddlewaer.js');
const submiddle = require('../middleware/submiddleware.js');

routers = express.Router()


routers.post('/register',handlingregister)
routers.post('/login',handlinglogin)// when login is scuessful an acess token is cerated for each user to stay login so we always have  toverify the token that where the middle waere comes in place 
routers.get('/user-dashboard',homepagemiddlewaer,handlinggoingtohome),
routers.get('/admin',homepagemiddlewaer,adminmiddlewaer,handlingadmindashboard)//middle waer  checks the user role 
// not we can protect routhes by using middle wear the routhes can take mutiple middle weare as handler 
routers.get("/userdashboard/subscription",submiddle,subscription)
routers.put('/updatepassword',changingpassword)

routers.post('/addingnewlist',homepagemiddlewaer,addinngnewpost)
routers.delete('/deletepost',homepagemiddlewaer,deletingpost)
routers.get('/allpost',homepagemiddlewaer,fetchingallpost)
module.exports =routers
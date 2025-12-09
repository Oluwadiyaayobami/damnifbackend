const express = require('express');
const dotenv = require('dotenv').config()
const databaseconnection = require('./database/db.js')
const app = express()
const routers = require('./routes/applicationrouthes.js')


app.use(express.json());
app.use('/api/auth',routers)
const port = process.env.PORT
app.listen(port, ()=>console.log(`server running on ${port}`))




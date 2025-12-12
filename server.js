const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const databaseconnection = require('./database/db.js')
const app = express()
const routers = require('./routes/applicationrouthes.js')

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use('/api/auth',routers)
const port = process.env.PORT
app.listen(port,"0.0.0.0" ,()=>console.log(`server running on ${port}`))



// app.use(cors({
//     origin: "allowed port eg locall host 3000 ",
//     credentials: true allow use of header 
// }))
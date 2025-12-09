const { error } = require('console')
const mongoose = require('mongoose')
const databaseconnection  = mongoose.connect(process.env.MONGOOSE).then(()=>console.log('database connected')).catch((error)=>console.log(error))

module.exports =databaseconnection
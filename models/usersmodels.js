const mongoose =  require('mongoose')

const registerschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    role: {
        type: String,
        default : 'user'
    },

    password: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        default: Date.now
    }
})


const loginschema = new mongoose.Schema({
        email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
})

const registermodel =  mongoose.model('userinformation',registerschema);
const loginmodel =  mongoose.model('userlogin',loginschema);

module.exports ={registermodel,loginmodel}


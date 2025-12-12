const {registermodel,loginmodel} = require('../models/usersmodels.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const homemiddleware = require('../middleware/homemiddleware.js')
const handlingregister = async (req,res)=>{
    try{
        // check if user information doest exist 
      const {password ,email,username ,role} = req.body

      const register = await registermodel.findOne({
        $or: [{email}, {username}]
      })
      if(register){
        res.status(404).json({
            status : 'failed',
            message : 'user already exist pls cerate a new account '
        })
      }
      else{
        // then the user does not exist so we have to store a new user 
        const hasingpassword = await bcrypt.hash(password,10)
        const addingnewuser = await registermodel.create({
            username :username,
            password :hasingpassword,
            email: email,
            role : role
        })

        if(addingnewuser){
            res.status(200).json({
                status : 'sucessful',
                message :'user account cerated'
            })

        }
        else{
            res.status(404).json({
                status: 'failed',
                message : 'pls try again'
            })
        }
      }

    }

    catch(error){
        res.status(500).json({
            message : 'internal service error we would get back to you ',
            error : error
        })

    }

}

const handlinglogin = async (req,res) =>{
    try{
        const {password,email} =req.body
        // first thing to do is to check if the user esixt in the database
        const logining = await registermodel.findOne({email})
        if(!logining){
            res.status(401).json({
                status :'failed',
                message: 'user does not exist in our collection'
            })
        }
        else{
            // we would verify password
            const verifypassword = await bcrypt.compare(password,logining.password)
            if(!verifypassword){
                res.status(400).json({
                    status: 'failed',
                    message: 'password doesnot match '
                })
            }
            else {
                // cerating acssstoken 
                const acesstoken = await jwt.sign({
                    email:email,
                    userid : logining._id,
                    username:logining.username,
                    role: logining.role

                },process.env.jwtacesstoken,{expiresIn :'15m'})
                res.status(200).json({
                    status: 'sucessful',
                    message: `login sucessful ${logining.username}`,
                    role:` ${logining.role}`,
                    acesstoken : acesstoken
                })
                
            }
        }


    }
    catch(error){
        res.status(500).json({
            satus :"failed an error occured pls try again",
             message : error
        })

    }

}

const handlinggoingtohome = async (req,res) => {
    res.status(200).json({
        message :'welcome',
        username : req.userinformation.username
    })



}
const handlingadmindashboard = async (req,res)=> {
    res.status(200).json({
        message : "wellcome to admin dashboard "
    })

}
const subscription = async (req,res)=>{
    res.satus(200).json({
        message : "welcome to the subscription page "
    })
}
module.exports ={handlingregister,handlinglogin,handlinggoingtohome,handlingadmindashboard,subscription}
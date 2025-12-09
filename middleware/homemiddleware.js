const jwt = require('jsonwebtoken')
const homepagemiddlewaer = async (req,res,next) =>{
    try{    
    const authtokin  = req.headers['authorization'];


    if(!authtokin){
        res.status(401).json({
            status :'failed',
            message: 'pls login no acess token found '
        })
    }
    else{
        // verify the tokin 
        const acesstoken = authtokin.split(' ')[1]
        const verifyingtoken = await jwt.verify(acesstoken,process.env.jwtacesstoken)

        if(!verifyingtoken){
            res.satus(400).json({
                message : 'invalid acess token '
            })
        }
        else{
            req.userinformation = verifyingtoken
        }
        
    }


    next()
    }
    catch(error){
        res.status(500).json({
            message :"an error ocured ",
            error: error
        })

    }

} 
module.exports= homepagemiddlewaer
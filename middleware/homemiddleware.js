const jwt = require('jsonwebtoken')
const homepagemiddlewaer = async (req,res,next) =>{
    try{    
    const authtokin  = req.headers['authorization'];// this contain the bearer token that has our encrypted pay load 


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
        // to verify the acess token we have to use the verify key word and pass it with our jwt service key 

        if(!verifyingtoken){
            // this entire section check if the acess tokin providen matched with the one generated 
            res.satus(400).json({
                message : 'invalid acess token '
            })
        }
        else{
            // this section holds the acess token and store it in a request user infor in the middleware 
            req.userinformation = verifyingtoken
        }
        
    }


    next()// this next go to the next handler preceding the routhes 
    }
    catch(error){
        res.status(500).json({
            message :"an error ocured ",
            error: error
        })

    }

} 
module.exports= homepagemiddlewaer
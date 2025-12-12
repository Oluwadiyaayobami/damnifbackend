const submiddle = async (req,res,next)=>{

   if(req.userinformation !== "user"){
    res.status(400).json({
        message : "pls login in to be able to acess the register page "
    })
   }
    next()
}
module.exports = submiddle
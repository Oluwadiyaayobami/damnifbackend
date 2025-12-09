const adminmiddlewaer = async(req,res,next)=>{
    if(req.userinformation.role !== 'admin'){
        res.json({
            message: "user cant acess admin routh",
        })
    }
    next()

}
module.exports= adminmiddlewaer
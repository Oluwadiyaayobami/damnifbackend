const adminmiddlewaer = async(req,res,next)=>{
    if(req.userinformation.role !== 'admin'){
        res.json({
            message: "user cant acess admin routh",
        })
    }
    next()

}
module.exports= adminmiddlewaer

// okay now i learn cors and also i learn how to connet my backen end through diffrent ip adress 
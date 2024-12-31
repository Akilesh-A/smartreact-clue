const members=require("../models/memberModel")
exports.getMembers= async(req,res,next)=>{
    try{
        const member=await members.find();
        res.json({
            message:"kazbcjcbjc",
            member
        })
    }
    catch(err){
        next(err)
   }
}
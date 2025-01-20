
const menuModel=require("../models/menuModel")
exports.getmenuDetails=async (req,res,next)=>{
   try{
   const menu= await menuModel.find();
   res.json({
    msg:"menuDetails",
    status:"success",
    menu
   })
   
   

   }catch(err){
    next(err)

   }

}

exports.getSinglemenuDetails= async (req,res,next)=>{
   console.log(req.params.id);
   
  try{
   const productMenu= await menuModel.findById(req.params.id)
   res.json({
    msg:"Single menuDetails",
    status:"success",
    productMenu
   })

  }catch(err){
    next(err)
  }

}
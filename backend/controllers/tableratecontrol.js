const tablerate=require("../models/tablerateModel")

exports.createRatetable= async (req,res,next)=>{
    const{days,startrule,endrule,applyTable,rateType,rate,enable}=req.body
    try{
        const newRatetable=await tablerate.create({days,startrule,endrule,applyTable,rateType,rate,enable})
        res.json({
            message:"Rate table created successfully",
            status:201,
            newRatetable
           
            
        })

    }catch(err){
        next(err)
    }
   

}
exports.getrateDetaillss=async(req,res,next)=>{
   try{
    const ratetables=await tablerate.find()
    res.json({ratetables})
   
    }catch(err){
       next(err)
 
    }

}

exports.deleteRatetable=async(req,res,next)=>{
    const {id}=req.params
    try{
        await tablerate.findByIdAndDelete(id);
        res.json({
            message:"Rate table deleted successfully",
            status:200
            
        })
    

    }catch(err){
        next(err)
    }
}
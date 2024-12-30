const mongoose=require('mongoose');

const rateSchema=new mongoose.Schema({
    days:{type: String, required: true},
    startrule:{type: String, required: true},
    endrule:{type: String, required: true},
    applyTable:{type: String, required: true},
    rateType:{type: String, required: true},
    rate:{type:String,required: true},
    enable:{type: String, required: true},
    
    Date:{type:Date,default:Date.now}
})
const table=mongoose.model("TableRate",rateSchema)
module.exports = table;
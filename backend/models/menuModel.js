const mongoose=require('mongoose');

let menuSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    images:[{
        images:String
    }],
    ratings:String,
    category:String,
    seller:String,
    stock:String,
    reviews:String,
    createdAt:Date,
})

const menuModel=mongoose.model('Menu',menuSchema);

module.exports=menuModel 
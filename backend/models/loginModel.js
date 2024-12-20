const moongose=require('mongoose');
const loginSchema= new moongose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    date:Date
})
const loginModel=moongose.model("Login",loginSchema);
module.exports=loginModel
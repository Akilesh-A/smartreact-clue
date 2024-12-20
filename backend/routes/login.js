const express=require('express')
const router=express.Router();

// Importing controllers
const {login}=require('../controllers/loginControl')

router.route('/login').post(login);
module.exports=router

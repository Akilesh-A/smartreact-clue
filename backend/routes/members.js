const express=require('express')
const router=express.Router();
const {getMembers}=require('../controllers/getMemberscontrol')
router.get('/membersdetails',getMembers)

module.exports=router;
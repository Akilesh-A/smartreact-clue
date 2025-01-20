
const express=require('express');
const router=express.Router();
const {getmenuDetails,getSinglemenuDetails}=require("../controllers/menuControl")
router.get("/getmenu",getmenuDetails);
router.get("/getmenu/:id",getSinglemenuDetails);

module.exports=router;
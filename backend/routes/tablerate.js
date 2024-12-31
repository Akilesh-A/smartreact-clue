const express = require('express');
const router = express.Router();
const { createRatetable,getrateDetaillss,deleteRatetable,updateRatetable} = require("../controllers/tableratecontrol");

router.post("/createtable", createRatetable);
router.route("/gettableratedetails").get(getrateDetaillss);
router.delete("/deleteratetable/:id", deleteRatetable);
router.put("/updaterate/:id",updateRatetable)

module.exports = router;

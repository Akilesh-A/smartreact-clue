const express=require('express');
const router=express.Router();
const {createTableMember,getTableMembers,deleteTableMember,updateManyTableMember}=require('../controllers/tableManagementcontrol')


router.post('/tablemembers',createTableMember);
router.route('/fulltablemembers').get(getTableMembers);
router.delete('/tablemember/:id',deleteTableMember);
router.put('/updatedtablemember/:id',updateManyTableMember);

module.exports = router
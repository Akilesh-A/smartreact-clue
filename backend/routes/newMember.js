// routes/newMemberRoutes.js
const express = require('express');
const router = express.Router();
const {
  createMember,
  getMembers,
  deletemember,
  getSingleMember
 
} = require('../controllers/newMemberControl');



router.route('/newMember').post(createMember);// POST a new member
router.get('/members',getMembers); // GET all members
router.get('/members/:id', getSingleMember);
router.delete('/members/:id',deletemember); //deletemember

module.exports = router;

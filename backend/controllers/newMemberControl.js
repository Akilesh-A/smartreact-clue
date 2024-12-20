// controllers/newMemberController.js
const NewMember = require('../models/newMemberModel');





// Create a new member
exports.createMember = async (req, res, next) => {
  try {
    const { name, phone } = req.body;
    const newMember = await NewMember.create({ name, phone });
    res.status(201).json({
      message: "New member created successfully",
      status: 201,
      newMember
    });
  } catch (err) {
    next(err);
  }
};

// fetch all membes
exports.getMembers= async(req,res,next)=>{
  try{
    const members=await NewMember.find();
    res.status(201).json({members});


  }catch(err){
    next(err);

  }

}
exports.getSingleMember = async (req, res, next) => {
  try {
    // Log the route and query params
    console.log("Route Params (req.params):", req.params); // For route params
    console.log("Query Params (req.query):", req.query);   // For query params

    
    const val = req.params.id;
    const memberName = req.query.name;

    console.log("Route Parameter - ID:", val);
    console.log("Query Parameter - Name:", memberName);

   
    const newMember = val ? await NewMember.findById(val) : null;

    // const memberByName = memberName
    //   ? await NewMember.find({ name: new RegExp(`^${memberName}$`, 'i') })
    //   : null;

    
    res.json({
      idMember: newMember || "No member found with this ID",
      // nameMember: memberByName.length ? memberByName : "No member found with this name",
    });
  } catch (error) {
    console.error("Error fetching member:", error);
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};


exports.deletemember=async (req,res,next)=>{


try{
  let {id}=req.params;
  await NewMember.findByIdAndDelete(id);
  res.status(200).json({message:"member deleted successfully"});

}
catch(err){
  next(err);
}
}

// Delete a member by ID
// exports.deleteMember = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await NewMember.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Member deleted successfully' });
//   } catch (err) {
//     next(err);
//   }
// };

// Update a member by ID
// exports.updateMember = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { name, phone } = req.body;
//     const updatedMember = await NewMember.findByIdAndUpdate(id, { name, phone }, { new: true });
//     res.status(200).json({ message: 'Member updated successfully', updatedMember });
//   } catch (err) {
//     next(err);
//   }
// };

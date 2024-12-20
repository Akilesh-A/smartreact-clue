
// const Table=require('../models/tableManagementModel')
// exports.createTableMember=(req,res,next)=>{
//     const { table_number, status } = req.body;
//     const newTable=Table.create({ table_number, status})
//     res.json({
//         message:"Table created successfully",
//         status:201,
//         newTable
     
//     })
// }


const Table = require('../models/tableManagementModel');

exports.createTableMember = async (req, res, next) => {
  const { 
    tableName, 
    tableCharges, 
    ratePerMin1, 
    ratePerMin2, 
    roomRate, 
    tableTheme 
  } = req.body;

  try {
    const newTable = await Table.create({
      tableName, 
      tableCharges, 
      ratePerMin1, 
      ratePerMin2, 
      roomRate, 
      tableTheme,
      Date: new Date()  // Automatically set the current date for the table
    });

    res.status(201).json({
      message: "Table created successfully",
      status: 201,
      newTable
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


exports.getTableMembers= async (req, res, next) => {
const Table = require('../models/tableManagementModel');
  let data= await Table.find()
  // console.log(data);
  
  res.json({
    message: "All tables",
    status: 200,
    data 
  })
}

exports.deleteTableMember= async(req,res,next)=>{
 const {id}=req.params
try{
await Table.findByIdAndDelete(id);
  res.json({

    status: 200,
    message:"Table deleted successfully"
  
  })

}catch(err){
  next(err);

}
 
  
}
exports.updateManyTableMember = async (req, res, next) => {
  const { id } = req.params; // Extract the ID from the route parameters
  const { 
    tableName, 
    tableCharges, 
    ratePerMin1, 
    ratePerMin2, 
    roomRate, 
    tableTheme 
  } = req.body; // Extract fields to update from the request body

  try {
    const updatedTable = await Table.findByIdAndUpdate(
      id, // Pass the ID directly
      {
        tableName, 
        tableCharges, 
        ratePerMin1, 
        ratePerMin2, 
        roomRate, 
        tableTheme
      },
      { new: true } // Return the updated document
    );

    if (!updatedTable) {
      return res.status(404).json({ message: "Table not found", status: 404 });
    }

    res.status(200).json({
      status: 200,
      message: "Table updated successfully",
      updatedTable
    });

  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
};


  


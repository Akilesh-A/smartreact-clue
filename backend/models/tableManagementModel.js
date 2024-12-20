const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  tableName: { type: String, required: true },
  tableCharges: { type: String, required: true },
  ratePerMin1: { type: String, required: true },
  ratePerMin2: { type: String, required: true },
  roomRate: { type: String, required: true },
  tableTheme: { type: String, required: true },
  Date: { type: Date, default: Date.now }  
});

const Table = mongoose.model('Tablemanagement', memberSchema);

module.exports = Table;

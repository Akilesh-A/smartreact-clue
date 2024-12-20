const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const connectDatabase = require('./config/connectDatabase');
const cors = require('cors');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const login = require('./routes/login');
const newMember=require('./routes/newMember');
const tablemanagement=require('../backend/routes/tableManagement');

connectDatabase();
app.use(express.json());
app.use(cors());

app.use('/api/v2/',login);
app.use('/api/v2/',newMember);
app.use('/api/v2/',tablemanagement);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});

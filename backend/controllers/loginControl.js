
const loginModel= require('../models/loginModel')
exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log(email,password);
      const logindetails=await loginModel.create({email,password})
      
      console.log("control login page");
      res.json({
        message: "login successful",
        status: 201,
        logindetails

      });
      console.log("Created");
    } catch (err) {
      console.log(err);
    }
  };
  
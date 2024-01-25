// logic to resolve the request
// importing modal 
const admin = require('../Modal/adminSchema')

// importing jwt token
const jwt = require('jsonwebtoken')

// register request
exports.register = async(req,res)=>{
    console.log('inside the controller');

// extracting data from request body
try{const{adminname,email,password}=req.body
const existingAdmin = await admin .findOne({email})
if(existingAdmin){
    res.status(406).json("Account Already Exist...Please login")
}
else{
    // registering 
    // creating object for the model
      const newAdmin = new admin({
        adminname,
        email,
        password
      })
    //   adding to mongodb
    await newAdmin.save()
    // response
res.status(200).json(newAdmin)
}
}catch(err){
res.status(401).json(`Register Request Faield Due To ${err}`)
}

}

// login request
exports.login = async(req,res)=>{
const {email,password} = req.body

try{const existingAdmin = await admin.findOne({email,password})
console.log(existingAdmin);

if(existingAdmin){
  // jwt
   const token = jwt.sign({adminID:existingAdmin._id},"supersecretkey12345")
  res.status(200).json({
    existingAdmin,
    token
  })
}
else{
  res.status(404).json('Invalid Email or Password')
}
}catch(err){
  res.status(401).json(`login request failed due to ${err}`);
}
}
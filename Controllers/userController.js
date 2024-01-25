

// importing userschema
const users  =require('../Modal/userSchema')

const jwtToken = require('jsonwebtoken')


// register request
// exports.userRegister = async(req,res)=>{
//     console.log('inside user controller');
//     const{username,email,password}=req.body
//     try{const existingUser = await users.findOne({email})
//     if(existingUser){
//         res.status(406).json("Account Already Exist...Please login")
//     }
//     else{
//         // registering 
//         // creating object for the model
//           const newUser = new users({
//             username,
//             email,
//             password
//           })
//         //   adding to mongodb
//         await newUser.save()
//         // response
//     res.status(200).json(newUser)
//     }}catch(err){
//         res.status(401).json(`Register Request Faield Due To ${err}`)
//         }
//     // res.status(200).json("registration request recieved")


// }

exports.userRegister = async(req,res)=>{
    console.log('inside the controller');

// extracting data from request body
try{const{username,email,password}=req.body
const existingUser = await users.findOne({email})
if(existingUser){
    res.status(406).json("Account Already Exist...Please login")
}
else{
    // registering 
    // creating object for the model
      const newUser = new users({
        username,
        email,
        password
      })
    //   adding to mongodb
    await newUser.save()
    // response
res.status(200).json(newUser)
}
}catch(err){
res.status(401).json(`Register Request Faield Due To ${err}`)
}

}

// user login
exports.userlogin = async(req,res)=>{
  const {email,password} = req.body
  try{const existingUser = await users.findOne({email,password})
  console.log(existingUser);
  
  if(existingUser){
    // jwt
    const token = jwtToken.sign({userID:existingUser._id},"supersecretkey123456")

   res.status(200).json({
    existingUser,
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
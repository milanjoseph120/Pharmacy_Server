// importing mongoose
const mongoose = require('mongoose')

// defining structure
const adminSchema = new mongoose.Schema({
    adminname:{
        type:String,
        require:true,
        min:[3,'Must be altleast 3 characters but got{VALUE}']
    },
    email:{
        type:String,
        require:true,
        unique:true ,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
              
        }
    },
    password:{
        type:String,
        require:true
    }
})


// creatimg modal
const admin = mongoose.model("admin",adminSchema)

// exporting modal to controller
module.exports = admin
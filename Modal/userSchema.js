

// importing mongoose
const mongoose = require('mongoose')

// creating structure

const userSchema = new mongoose.Schema({
    username:{
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

// creating model

const users = mongoose.model("users" , userSchema)

// exporting model
module.exports = users


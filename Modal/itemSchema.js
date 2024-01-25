

// importing mongoose

const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    details:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    adminID:{
        type:String,
        require:true
    }   
   
})

const items = mongoose.model("items",itemSchema)

module.exports = items
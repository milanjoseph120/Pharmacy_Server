
// const mongoose = require('mongoose')

// const connectionString = process.env.Network

// mongoose.connect(connectionString).then(()=>{
//     console.log('connected');

// }).catch((err)=>{
//     console.log(`${err}`);
// })



const mongoose = require('mongoose')

const connection = process.env.JOSEPH


mongoose.connect(connection).then(()=>{
    console.log("mongodb connected successfully");
}).catch((err)=>{
    console.log(`mongodb connection failed due to:${err}`);
})














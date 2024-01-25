// import .env
// config=>Loads .env file contents into process.env by default. 
// require('dotenv').config()
require('dotenv').config()

// importing express
const express = require('express')

// import cros
const cros = require('cors')

// import router
const router = require('./Routers/router')

// importing connection.js file
require('./MilanssMongo/milanssMongo')

const pharmServer = express()

// use of cros in server
pharmServer.use(cros())

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
pharmServer.use(express.json())

// use of router by server
pharmServer.use(router)

// server use uploads folder
pharmServer.use('/uploads',express.static('./uploads'))

// port customization 
const PORT = 4000 || process.env

// to run server
pharmServer.listen(PORT, ()=>{
    console.log(`Server Running Successfully At Port number ${PORT}`);
})

// get request
pharmServer.get('/', (req,res)=>{
    res.send(`<h1>PharmacyServer running successfully and ready to accept request from client</h1>`)
})

// // post request
// pharmServer.post('/', (req,res)=>{
//     res.send(`post request`)
// })

// // put request
// pharmServer.put('/', (req,res)=>{
//     res.send(`put request`)
// })

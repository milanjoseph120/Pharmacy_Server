// set up path to rsolve request

// import express
const express = require('express')

// import controller
const adminController = require('../Controllers/adminController')

// importing item controller
const itemController = require('../Controllers/itemController')

// import jwtmiddleware
const middleware = require('../Mware/m')

// importing multer
const multerConfig = require('../Mware/multerMultiport')

// importing userController
const userController = require('../Controllers/userController')

// creating object for router
const router = new express.Router()

// setting path to resolve request
// registration
router.post('/admin/register',adminController.register)

// login
router.post('/admin/login',adminController.login)

// add items
router.post('/items/add',middleware,multerConfig.single('image'),itemController.addItems)

// all-items
router.get('/items/home-items',middleware,itemController.getallItems)

// admin-items
router.get('/admin/home-items',middleware,itemController.getAdminItems)

// edit-items
router.put('/items/edit/:id',middleware,multerConfig.single('image'),itemController.adminEditItems)

// delete-itmes
router.delete('/items/remove/:id',middleware,itemController.deleteItems)

// user registration
router.post('/user/useRegister',userController.userRegister)

// user login
router.post('/user/userLogin',userController.userlogin)

// user items
router.get('/items/user-items',itemController.getallItems)

// exporting router
module.exports = router

// multerConfig.single('image')
const express=require('express');
const hash= require('../middleware/auth')
const {registerAdmin,loginAdmin} = require('../controller/adminController');


const adminrouter=express.Router();

adminrouter.post('/register',registerAdmin);
adminrouter.post('/login', hash, loginAdmin);


module.exports=adminrouter
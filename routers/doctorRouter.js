const express=require('express');
const { model } = require('mongoose');
const addDoctor = require('../controller/doctorController');

const doctorRouter=express.Router();

doctorRouter.post('/adddoc',addDoctor)

module.exports=doctorRouter
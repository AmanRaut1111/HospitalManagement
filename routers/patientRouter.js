const express=require('express');
const {addPatient,getPatient, updatepatient, deletePatient} = require('../controller/patientcontroller');


const patientRouter=express.Router();


patientRouter.post('/add',addPatient);
patientRouter.get('/get',getPatient);
patientRouter.put('/update/:id',updatepatient);
patientRouter.delete('/delete/:id',deletePatient)

module.exports=patientRouter                                                                                                                           
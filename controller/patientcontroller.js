const express=require('express');


const patientModel=require('../models/patientmodel')



const addPatient=async(req,res)=>{
    const{patientName,dignoseWith,address,age,gender,bloodGroup,admittedIn}=req.body
    try {
        const data= await patientModel({
            patientName:patientName,
            dignoseWith:dignoseWith,
            address:address,
            age:age,
            gender:gender,
            bloodGroup:bloodGroup,
            admittedIn:admittedIn
        });
        const patientdata=await data.save();
        if(patientdata){
            res.status(200).json({message:"Patient Record added Sucessfully...!",status:true,statusCode:200,data:patientdata})
        }else{
            res.status(400).json({message:"something went wrong...!",status:false,statuCode:400})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong...!",status:false,statuCode:500})
    }
};


//get patient


const getPatient=async(req,res)=>{
try {
    const patientdata= await patientModel.find();
    if(patientdata){
        res.status(200).json({message:"Patient Data found Sucessfully",status:true,statusCode:200,data:patientdata})
    }else{
        res.status(400).json({message:"something went wrong...!",status:false,statuCode:400})
    }
} catch (error) {
    console.log(error);
    res.status(500).json({message:"something went wrong...!",status:false,statuCode:500})
}
};

const updatepatient=async(req,res)=>{
    const {id}=req.params
    try {
        const data= await patientModel.findByIdAndUpdate(id,{$set:req.body},{new:true});
        if(data){
            res.status(200).json({message:"Patient Data is updated sucesssfully...!",status:true,statusCode:200,data:data})
        }else{
           return res.status(400).json({message:"something went wrong...!",status:false,statuCode:400})
        }
    } catch (error) {
        console.log(error);
       return res.status(500).json({message:"something went wrong...!",status:false,statuCode:500})
     
    }
}


const deletePatient= async(req,res)=>{
    const{id}=req.params

    try {
        const data= await patientModel.findOneAndDelete(id);
        if(data){
            res.status(200).json({message:"Record Deleted sucessfully..!",status:true,statuCode:200})
        }else{
            res.status(400).json({message:"something went wrong...!",status:false,statuCode:400})
        }
    } catch (error) {
        console.log();
        return res.status(500).json({message:"something went wrong...!",status:false,statuCode:500})
    }
}
module.exports={
    addPatient,
    getPatient,
    updatepatient,
    deletePatient
}

const express = require('express');
const AdminModel = require("../models/adminModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "Aman"




const registerAdmin = async (req, res) => {
    try {
        const { fname, email, password } = req.body

        const check = await AdminModel.findOne({ email})

        if (check) {
            return res.status(500).json({ message: "This email is Already in Use...!", status: false, statusCode: 500 })
        }


        const hash = await bcrypt.hash(password, 10)

        const admindata = await AdminModel({
            fname: fname,
            email: email,
            password: hash
        });

       const data = await admindata.save();
        const token = jwt.sign({ id: admindata._id }, SECRET_KEY, { expiresIn: "1y" })
        if (data) {
            res.status(200).json({ message: "Admin Register Sucessfully...!", status: true, statusCode: 200, data: data, token: token })
        } else {
            res.status(400).json({ message: "Something Went Wrong...!", status: false, statusCode: 400 })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong...!", status: false, statusCode: 500 })
    }
};


const loginAdmin= async(req,res)=>{
    try {
        const{email,password}=req.body;
        if(email && password){
            let check= await AdminModel.findOne({email});
            if(check){
                const checpass= await bcrypt.compare(password,check.password);
                if(checpass){


                    res.status(200).json({message:"Login Sucessfully...!", status:true,statusCode:200})
                }else{
                    res.status(500).json({message:"Invalid Crendial Password Is Not Match...!",status:false,statusCode:500})
                }
            }else{
                res.status(500).json({message:"This Email Is Not Register....Plese Try Again..!!",status:false,statusCode:500})
            }
        }else{
            res.status(500).json({message:"Something Went wrong...!",status:false,statusCode:500})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went wrong........!",status:false,statusCode:500})
    }
}

module.exports = {registerAdmin,loginAdmin}
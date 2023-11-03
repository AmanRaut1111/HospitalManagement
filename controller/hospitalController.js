const express = require("express");
const HospitalModel = require("../models/hospitalModel");

const addhospital = async (req, res) => {
    const {
        hospitalName,
        addressLine1,
        addressLine2,
        pincode,
        city,
        specializedIn,
    } = req.body;
    try {
        const hospitaldata = await HospitalModel({
            hospitalName: hospitalName,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            pincode: pincode,
            city: city,
            specializedIn: specializedIn,
        });

        const data = await hospitaldata.save();
        if (data) {
            res
                .status(200)
                .json({
                    message: "Hospital Added Sucessfully...!",
                    status: true,
                    statuCode: 200,
                    data: data,
                });
        } else {
            res
                .status(400)
                .json({
                    message: "Something Went Wrong...!",
                    status: true,
                    statuscoe: 400,
                });
        }
    } catch (error) {
        console.log(error);
        res
            .status(400)
            .json({
                message: "Something Went Wrong...!",
                status: true,
                statuscoe: 400,
            });
    }
};

//getHospital

const getHospital = async (req, res) => {
    try {
        const doctorData = await HospitalModel.find();

        if (doctorData) {
            res
                .status(200)
                .json({
                    message: "Data Found Sucessfully...!",
                    status: true,
                    statusCode: 200,
                    data: doctorData,
                });
        } else {
            res
                .status(400)
                .json({
                    message: "something went wrong...!",
                    status: false,
                    statuCode: 400,
                });
        }
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
                message: "something went wrong...!",
                status: false,
                statuCode: 500,
            });
    }
};

//update hospital

const updateHospital = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await HospitalModel.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        if (data) {
            res
                .status(200)
                .json({
                    message: "Hospital Data Updated Sucessfully..!",
                    status: true,
                    statusCode: 200,
                    data: data,
                });
        } else {
            res
                .status(400)
                .json({
                    message: "something went wrong...!",
                    status: false,
                    statuCode: 400,
                });
        }
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
                message: "something went wrong...!",
                status: false,
                statuCode: 500,
            });
    }
};

//delete hospital

const deleteHospital = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await HospitalModel.findByIdAndDelete(id);
        if (data) {
            res
                .status(200)
                .json({
                    message: "Delete Sucessfully...!",
                    status: true,
                    statuCode: 200,
                });
        } else {
            res
                .status(400)
                .json({
                    message: "something went wrong...!",
                    status: false,
                    statuCode: 400,
                });
        }
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
                message: "something went wrong...!",
                status: false,
                statuCode: 500,
            });
    }
};

module.exports = {
    addhospital,
    getHospital,
    updateHospital,
    deleteHospital,
};

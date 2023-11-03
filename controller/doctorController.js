const express = require("express");
const doctorModel = require("../models/docModel");

//add Doctor
const addDoctor = async (req, res) => {
  const { name, salary, qualification, experienceInyears, worksInHospital } =
    req.body;


  try {
    const dodata = await doctorModel({
      name: name,
      salary: salary,
      qualification: qualification,
      experienceInyears: experienceInyears,
      worksInHospital: worksInHospital,

    });

    const doctordata = await dodata.save();

    if (doctordata) {
      res
        .status(200)
        .json({
          message: "Doctor Added Sucessfully...!",
          status: true,
          statusCode: 200,
          data: doctordata,
        });
    } else {
      res
        .status(400)
        .json({
          message: "Something Went Wrong...!",
          status: false,
          statusCode: 400,
        });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "Something Went Wrong...!",
        status: false,
        statusCode: 500,
      });
  }
};

module.exports = addDoctor;

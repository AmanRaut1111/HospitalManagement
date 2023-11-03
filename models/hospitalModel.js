const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    required: true,
  },

  pincode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  specializedIn: [
    {
      type: String,
    },
  ],

  createdAt: {
    type: Date,
    default: new Date(),
  },
});


module.exports=mongoose.model("Hospital",hospitalSchema)
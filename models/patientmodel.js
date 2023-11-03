const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },

  dignoseWith: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required:true
  },

  age: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },

  bloodGroup: {
    type: String,

    required: true,
  },

  admittedIn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Patient", patientSchema);

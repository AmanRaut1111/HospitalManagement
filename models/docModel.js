const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  salary: {
    type: String,
    required: true,
  },
  imgpath:{
type:String
  },
  qualification: {
    type: String,
  },
  experienceInyears: {
    type: Number,
    default: 0,
  },
  worksInHospital: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);

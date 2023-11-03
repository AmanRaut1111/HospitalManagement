const express = require("express");
const {
  addhospital,
  getHospital,
  updateHospital,
  deleteHospital,
} = require("../controller/hospitalController");

const hospitalRouter = express.Router();

hospitalRouter.post("/addHospital", addhospital);
hospitalRouter.get("/getHospital", getHospital);
hospitalRouter.put("/updateHospital/:id", updateHospital);
hospitalRouter.delete("/delete/:id", deleteHospital);

module.exports = hospitalRouter;

const express = require("express");
const db = require("./config/db");
const doctorRouter = require("./routers/doctorRouter");
const hospitalRouter = require("./routers/hospitalRouter");
const patientRouter = require("./routers/patientRouter");
const dotenv = require("dotenv");
const adminRouter = require("./routers/adminRouter");
dotenv.config();

const app = express();

app.use(express.json());

app.post("/api", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {});
    console.log(uploadResponse);
    res.json({ msg: "yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

//routers
app.use("/", doctorRouter);
app.use("/", hospitalRouter);
app.use("/patient", patientRouter);
app.use('/admin',adminRouter)

app.listen(process.env.PORT, () => {
  console.log(`server is listening on Port ${process.env.PORT}`);
});

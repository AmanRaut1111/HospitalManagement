const express=require('express')
const db=require('./config/db');
const doctorRouter=require('./routers/doctorRouter');
const  hospitalRouter= require('./routers/hospitalRouter');
const patientRouter = require('./routers/patientRouter');
const dotenv=require('dotenv')
dotenv.config();







const app=express();
app.use(fileupload({
    useTempFiles:true
}))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/api', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {});
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

//routers
app.use('/',doctorRouter)
app.use('/', hospitalRouter)
app.use('/patient',patientRouter )

app.listen(process.env.PORT,()=>{
    console.log(`server is listening on Port ${process.env.PORT}`);
})
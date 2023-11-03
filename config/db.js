const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config();


mongoose.connect(process.env.db_URL).then(()=>{

console.log("connected");
}).catch((error)=>{
console.log(error);
})
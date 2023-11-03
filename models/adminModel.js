const mongoose=require('mongoose');

const adminSchema= mongoose.Schema({

    fname:{
        type:String
    },

    email:{
        type:String,
        require:true,
    },
    password:{
        type:String
    }
});


module.exports= mongoose.model("Admin",adminSchema)
const jwt=require("jsonwebtoken"); 
const SECRET_KEY="Aman"


const auth=async(req,res,next)=>{
    try {
        let token= req.headers.authorization
        console.log(token);
        if(token){
            token=token.split(" ")[1];

            console.log("token is ", token);
            let user= jwt.verify(token,SECRET_KEY)
        }else{
            res.status(401).json({messsage:"unauthorized"})
        }
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({messsage:"unauthorized user"})
    }
};


module.exports=auth
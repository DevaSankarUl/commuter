const Driver = require('../models/driverModel')
const SignupDriver=async(req,res)=>{
    
    const {name,email,mobileNo,LiscenceNo,password,confirm_Password} = req.body.values
    

    const drive = req.body.values
    // console.log(drive);
    try{
        
        const driverData=await Driver.findOne({email:email||mobileNo})
        if(driverData){   
            // console.log(driverData);
            data = "Email Already Exists"
            res.json({mssg: data})
           
        }else{
            const driverDatas = await Driver.create({name,email,mobileNo,LiscenceNo,password})
            res.status(200).json({status:"Email Created "})
            console.log("Driver Signup Success");
        }
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
const loginDriver = async(req,res)=>{
    const validation = {
        driverLog:false,
        passErr:false,
        invalidDriver:false
    }
    
    const DriverLogin = req.body.values
    console.log(DriverLogin)
    try{
        const driverValidation = await Driver.findOne({email:DriverLogin.email})
        if(driverValidation){
            if(driverValidation.password === DriverLogin.password){
                validation.driverLog=true
                let message = "LoggedIn"
                res.json({data:message})
            }if(driverValidation.password !=DriverLogin.password){
                validation.passErr=true
                let errMessage="password Incorrect"
                res.json({data:errMessage})
            }
        }
        else{
            validation.invalidDriver = true
            let errMessage ="Invalid User"
            res.json({status:"No Such User Exists",data:errMessage})
        }
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
module.exports={
    SignupDriver,
    loginDriver
}
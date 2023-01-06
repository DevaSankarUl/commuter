// const { Admin } = require('mongodb')
const admin = require('../models/adminModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const adminLogin = async(req,res)=>{
    const validation ={
        adminLog:false,
        invalidAdmin:false,
        passErr:false
    }
    const adminDetail = req.body
    console.log(adminDetail);
    try{
        const adminValidation = await admin.findOne({name:adminDetail.name})
        console.log(adminValidation);    
        if(adminValidation){
            if(adminDetail.password === adminValidation.password){
                adminValidation.adminLog=true
                const token =jwt.sign({
                    admin:adminValidation.name,
                    password :adminValidation
                },'secret123')
                let errMessage="Logged in "
                res.json({data:errMessage,token})
            }else {
                console.log("Password Incorrect");
                adminValidation.passErr=true
                // let errMessage ="password Incorrect"
                // console.log("password Incorrect");
                res.json({status:"passwordWrong"})
            }
        }else if(!adminValidation){
        validation.invalidAdmin=true
        res.json({status: "Invalid admin"})
        }
    }
    catch(error){
        res.status(400).json({error:error.messsage})
        console.log(error);
    }

}

const userInfo = async(req,res)=>{
    const info = await User.find()
    if(info){
        return res.json({mssg:"Find it!",details:info})
    }else{
        return res.status(400).json({mssg:"No Users"}) 
    }
}

const blockUser = async(req,res)=>{
    // console.log('gggg');
    const id=req.params.id;
    console.log(req.params.id)
    try{
        if(id){
            const user =await User.findByIdAndUpdate({_id:id},{blockStatus:true})
            // console.log('succes');
            return res.json({mssg:"block Updated",details:user})
        }else{
            return res.status(400).json({mssg:"Not Updated"})
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({mssg:err.message})
    }
}
const unblockUser = async(req,res)=>{
    const id=req.params.id;
    try{
        if(id){
            const user = await User.findOneAndUpdate({_id:id},{blockStatus:false})
            return res.json({mssg:"Unblock Updated",details:user});
        }else{
            return res.status(400).json({mssg:"Not Updated"})
        }
    }catch(err){
        return res.status(500).json({mssg:err.message})
    }
}
module.exports={
    adminLogin,
    userInfo,
    blockUser,
    unblockUser
} 
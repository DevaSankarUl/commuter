const User = require('../models/usermodel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const sendMail = require('./sendMail')
const {CLIENT_URL} = process.env
const { networksecurity } = require('googleapis/build/src/apis/networksecurity')
// const SendmailTransport = require('nodemailer/lib/sendmail-transport')
const loginUser = async (req, res) => {
    const validation = {
        userLog: false,
        passErr: false,
        invalidUser: false
    }

    const userDetails  = req.body
    console.log(userDetails);
    try {
        const userValidation = await User.findOne({ email: userDetails.email })
        // const isMatch = await bcrypt.compare(password,User.password)
        // if(!isMatch) return res.status.json({mssg:"password is Incorrect"})
        if (userValidation) {
          
            if (userDetails.password ==userValidation.password)
             {
              
                validation.userLog = true
                const token = jwt.sign({
                    expiresIn: '8m',
                    user: userValidation.name,
                    email: userValidation
                }, 'secret123')
            
                let errMessage = "Logged in"
                res.json({ token, data: errMessage })
                console.log("user logged in");
                
            } else {
                validation.passErr = true
                let errMessage = "Password Incorrect"
                console.log("password Incorect ")
                res.json({ status: "Password Wrong", data: errMessage })
            }

        } else {
            validation.invalidUser = true
            let errMessage = "Invalid User"
            res.json({ status: "No Such User Exists", data: errMessage })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("Error Message")
    }


}
const SignupUser ={ 
    register:async (req, res) => {

    //   console.log(userDetails);
    try {
        const { name, email, password } = req.body
        // console.log(name,email,password);
        if (!name || !email || !password)
            return res.status(400).json({ mssg: "Please fill all field" })

        // const user = await User.findOne({email})
        // if(user){
        //     res.json({mssg:"Email already"})
        // console.log("Email Already there");
        const user = await User.findOne({ email:email })
        if (user) return res.status(400).json({ mssg: "This is email already exists" })

        if (password.length < 6) {
            return res.status(400).json({ mssg: "password must be at least 6 character" })
        }
        const passwordHash = await bcrypt.hash(password, 12)
       const newUser = {
        name,email,password:passwordHash
       }
       const activation_token= createActivationToken(newUser)
       const url = `${CLIENT_URL}/user/activate/${activation_token}`
       sendMail(email,url)
       
       
       console.log(activation_token)
        res.json({ mssg: "Register Success" })


        // const userData = await User.create(name,email,password)
        // res.status(200).json({status:"Email Created"})  
        // console.log("Sigup Success");


    } catch (error) {
        res.json({ mssg:error.message})
        //    console.log("hey")
    }
},
activateEmail: async(req,res)=>{
   try{
    const {activation_token} = req.body
    const user = jwt.verify(
        activation_token,process.env.ACTIVATION_TOKEN_SECRET )
    console.log(user);
    const {name,email,password}=user
    const check = await User.findOne({email:email})
    if(check) return res.status(400).json({mssg:"This email is already exists"})
    const newUser = new  User({
        name,
        email,
        password,
         blockStatus:false
    })
    await newUser.save()
    res.json({mssg:"Account has been activated"})
   }   catch(err){
        return res.status(500).json({msg:err.message})
   }
},
}

const createActivationToken = (payload)=>{
    return jwt.sign(payload,process.env.ACTIVATION_TOKEN_SECRET,{expiresIn:'8m'})
}
const createAcessToken = (payload)=>{
    return jwt.sign(payload,process.env.ACTIVATION_TOKEN_SECRET,{expiresIn:"15m"})
}
const createRefreshToken=(payload)=>{
    return jwt.sign(payload,process.env.ACTIVATION_TOKEN_SECRET,{expiresIn:'7d'})
}
const SignupDriver = async (req, res) => {
    const driverDetail = req.body

    try {
        const driverData = await Driver.findOne({ email: driverDetail.email })
        if (driverData) {
            res.status(400).json({ mssg: "Email Already Exists" })
            console.log("Email Already there");
        }
        else {

            const driverData = await Driver.create(driverDetail)
            console.log(driverData);
            res.status(200).json({ status: "Email Created " })
            console.log("Driver Signup Success");
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = {
    SignupUser,
    loginUser,
    SignupDriver
}
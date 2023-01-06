import * as Yup from "yup";
export const DriverSchema = Yup.object({
    name:Yup.string().min(4).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please enter your email"),
    mobileNo:Yup.string().min(10,"Phone number must be a 10 digit number").max(11,  "Invalid PhoneN").required('This field is required'),
    LiscenceNo:Yup.string().min(16).required("Invlaide Liscence Id"),
    password:Yup.string().min(6).required("Please Enter your password"),
    confirm_Password:Yup.string().required().oneOf([Yup.ref('password'),null],"password Must Match")
})  
import * as Yup from "yup";
export const signupSchema = Yup.object({
    name:Yup.string().min(4).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please Enter your password"),
    confirm_Password:Yup.string().required().oneOf([Yup.ref('password'),null],"password Must Match")
})  
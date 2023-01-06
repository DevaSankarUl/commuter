import * as Yup from "yup";
export const AdminSchema = Yup.object({
    name:Yup.string().min(4).max(25).required("Please Enter Admin User"),
    password:Yup.string().min(6).required("Please Enter your password"),

})
import React, { useState } from 'react'

import DriveImg from '../assets/DriverPage.jpg'
import {Link,useNavigate} from 'react-router-dom'
import {  useFormik } from 'formik'
import { DriverSchema } from '../validation/DriverSignup'
import axios from 'axios'
const initialValues = {
  name: "",
  email: "",
  mobileNo: "",
  LiscenceNo: "",
  password: "",
  confirm_Password: ""
}

const DriverForm = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: DriverSchema,
    onSubmit: async (values, action) => {
      // console.log(values);
      const response = await axios.post('http://localhost:4000/api/Driver/signupDriver', {
        values
        // method:"POST",
        // body:JSON.stringify(values),
        // headers:{'Content-Type':'application/json'}
      })
      //  const json= await response.json()
      //  console.log(json);
      // console.log(response);
      //  if(!response.ok){
      //   setError(json.error)
      //  }
      //  if(response.ok){
      //   if(json.data ==="Existing User"){
      //     setError(json.data)

      //   }setError(null)
      //   console.log(json);
      //  }
      .then((response)=>{
        
        // console.log(response.data.mssg);
        if (response.data.mssg === "Email Already Exists") {
        setError(response.data.mssg)
      }else{
        navigate('/DriverLogin')
      }
      action.resetForm();
      })

      // console.log(error);
      // if (data.mssg === "Email Already Exists") {
      //   setError(data.error)
      // }
      // action.resetForm();
    },
  })
  return (
    <div className='h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex justify-center items-center overflow-hidden'>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
        <div className="hidden sm:block">
          <img className="bg-image object-cover w-full h-full" src={DriveImg}></img>
        </div>
        <div className="bg-black-700 text-black-700 flex flex-col justify-center">
          <form className="max-w-[400px]  w-full mx-auto  p-8 px-8   bg-gray-900 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8"
            onSubmit={handleSubmit}>
            <h2 className='text-4xl dark:text-white font-bold text-center'>SIGNUP</h2>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">UserName</label>
              <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-white-400 focus:outline-none '
                type="text"

                autoComplete="off"
                name="name"
                id="name"
                placeholder='Name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.name && touched.name ? (<p className='form-error text-red-500'>{errors.name}</p>) : null}

            </div>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">Email</label>
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-white-400 focus:outline-none '
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.email && touched.email ? (<p className='form-error text-red-500'>{errors.email}</p>) : null}
            </div>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">mobileNo</label>
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-white-400 focus:outline-none '
                type="number"
                autoComplete="off"
                name="mobileNo"
                id="moibleNo"
                placeholder='mobileNo'
                value={values.mobileNo}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.mobileNo && touched.mobileNo ? (<p className='form-error text-red-500'>{errors.mobileNo}</p>) : null}
            </div>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">Driving LiscenceNo</label>
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-white-400 focus:outline-none '
                type="string"
                autoComplete="off"
                name="LiscenceNo"
                id="LiscenceNo"
                placeholder='LiscenceNo'
                value={values.LiscenceNo}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.LiscenceNo && touched.LiscenceNo ? (<p className='form-error text-red-500'>{errors.LiscenceNo}</p>) : null}
            </div>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">Password</label>
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none'
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.password && touched.password ? (<p className='form-error text-red-500'>{errors.password}</p>) : null}
            </div>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">Confirm Password</label>
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none'
                type="password"
                autoComplete="off"
                name="confirm_Password"
                id="confirm_Password"
                placeholder='Confirm Password'
                value={values.confirm_Password}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.confirm_Password && touched.confirm_Password ? (<p className='form-error text-red-500'>{errors.confirm_Password}</p>) : null}
            </div>
            {error ? <p style={{ color: 'red' }} className="text-center">{error}</p> : ''}
            <div className='flex justify-between text-Blue-400 font-bold py-2'>
              <p><input type="checkbox" />Remember Me</p>
              <p> Forgot Password</p>
            </div>
            <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/65 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
              type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DriverForm
import React, { useState } from 'react'
// import bgImg from '../assets/LoginPage .jpg'
import { ErrorMessage, Formik, useFormik } from "formik"
import { AdminSchema } from '../validation/adminSchema'
const initialValues = {
  name: "",
  password: ""
}


const Admin = () => {
  const [validation, setValidation] = useState('')
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: AdminSchema,
    onSubmit: async (values, action) => {
      const response = await fetch('http://localhost:4000/api/admin/adminLog', {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "content-Type": 'application/json' }
      })


        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.status === "passwordWrong") {
            console.log("passs");

            setValidation(data.status)
          } else if (data.status === "Invalid admin") {
            console.log("Cannot Login");
            setValidation(data.status)
          } else if (data.data === "logged in") {
            localStorage.setItem('token', data.token)

            // console.log(data);
          }
        })

      action.resetForm();
    }
  })

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full '>
        {/* <div className="hidden sm:block"> */}
        {/* <img className="bg-image " src={bgImg}></img> */}
        {/* </div> */}
        <div className="bg-slate-700 text-zinc-700 flex flex-col justify-center">
          <form className="max-w-[400px]  w-full  mx-auto bg-slate-50 p-8 px-8 rounded-lg"
            onSubmit={handleSubmit}>
            <h2 className='text-4xl dark:text-white font-bold text-center'>ADMIN</h2>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">AdminName</label>
              <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-600 focus:outline-none '
                type="text"

                autoComplete="off"
                name="name"
                id="name"
                placeholder='Name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur} />
              <div><p className='text-red-500'>{validation.name}</p></div>
              {errors.name && touched.name ? (<p className='form-error text-red-500'>{errors.name}</p>) : null}

            </div>

            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">Password</label>
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-yellow-400 focus:outline-none'
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur} />
              <div><p className='text-red-600'>{validation}</p></div>
              {errors.password && touched.password ? (<p className='form-error text-red-500'>{errors.password}</p>) : null}
            </div>

            <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/65 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
              type="submit">Admin Login In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin
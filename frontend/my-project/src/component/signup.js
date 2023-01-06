
import React, { useState } from 'react'
import bgImg from '../assets/LoginPage .jpg'
import { ErrorMessage, Formik, useFormik } from "formik"
import { signupSchema } from '../validation/userSchema'
const initialValues = {
  name: "",
  email: "",
  password: "",
}


const Signup = () => {
  const [error, setError] = useState(null)
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, action) => {
      const response = await fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": 'application/json' }

      })

      const json = await response.json()
      if (!response.ok) {
        setError(json.error)
        console.log(error);
      }
      if (response.ok) {
        if (json.data === "Existing user") {
          setError(json.data);
          console.log("userExists", json.data);
        }

        setError(null)
        console.log("Successfull", json)
        console.log(json);
      }
      action.resetForm();
    },

  })

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full '>
        {/* <div className="hidden sm:block"> */}
        {/* <img className="bg-image " src={bgImg}></img> */}
        {/* </div> */}
        <div className="bg-slate-700 text-zinc-700 flex flex-col justify-center">
          <form className="max-w-[400px]  w-full mx-auto bg-emerald-500 p-8 px-8 rounded-lg"
            onSubmit={handleSubmit}>
            <h2 className='text-4xl dark:text-white font-bold text-center'>SIGNUP</h2>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">UserName</label>
              <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-yellow-400 focus:outline-none '
                type="text"

                // autoComplete="off"
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
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-yellow-400 focus:outline-none '
                type="email"
                // autoComplete="off"
                name="email"
                id="email"
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.email && touched.email ? (<p className='form-error text-red-500'>{errors.email}</p>) : null}
            </div>
            <div className='flex flex-col text-Blue-400 font-bold py-2'>
              <label htmlFor="">Password</label>
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-yellow-400 focus:outline-none'
                type="password"
                // autoComplete="off"
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
              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-yellow-400 focus:outline-none'
                type="password"
                autoComplete="off"
                name="confirm_Password"
                id="confirm_Password"
                placeholder='Confirm Password'
                value={values.confirm_Password}
                onChange={handleChange}
                onBlur={handleBlur} />
            
            </div>
            {errors.confirm_Password && touched.confirm_Password ? (<p className='form-error text-red-500'>{errors.confirm_Password}</p>) : null}
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

export default Signup 
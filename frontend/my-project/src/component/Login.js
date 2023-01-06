import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from "formik"
import { userLoginSchema } from '../validation/useLoginSchema'
const initialValues = {
  email: "",
  password: "",
}


const Login = () => {
  const [validation, setValidation] = useState('')

  let navigate = useNavigate()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: userLoginSchema,
    onSubmit: async (values, action) => {
      // console.log(values);
      const response = await fetch('http://localhost:4000/api/user/login', {

        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": 'application/json' }

      })
        // const json = await response.json()
        .then((res) => res.json())

        .then((data) => {
          console.log(data);
          if (data.data === "Password Incorrect") {
            setValidation(data.data)

          } else if (data.data === "Invalid User") {
            setValidation(data.status)
          } else if (data.data === "Logged in") {
            localStorage.setItem('token', data.token)
            navigate('/')
            console.log(data.token);
          }
        })
      action.resetForm();
    },

  })

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full '>
        {/* <div className="hidden sm:block"> */}
        {/* <img className="bg-image " src={bgImg}></img> */}
        {/* </div> */}
        <div className="bg-slate-50 text-blue-600 flex flex-col justify-center">
          <form className="max-w-[400px]  w-full mx-auto bg-slate-600 p-8 px-8 rounded-lg"
            onSubmit={handleSubmit}>  
            <h2 className='text-4xl dark:text-white font-bold text-center'>LOGIN</h2>

            <div className='flex flex-col text-Blue-400 font-bold py-2'>

              <label htmlFor="">Email</label>

              <input className='rounded-lg bg-gray mt-2 p-2 focus:border-blue-500 focus:bg-yellow-400 focus:outline-none'

                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} />
              <div><p className='text-red-500'>{validation}</p></div>
              {errors.email && touched.email ? (<p className='form-error text-red-500'>{errors.email}</p>) : null}
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

            <div className='flex justify-between text-Blue-400 font-bold py-2'>
              <p><input type="checkbox" />Remember Me</p>
              <p> Forgot Password</p>
            </div>
            <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/65 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
              type="submit">LogIn</button>
            <div className='flex  justify-center text-Blue-400 font-bold py-2'><p><Link to="/signup"> Create an account ? Register</Link></p></div>
            <a><button className='ml-28'><Link to="/signup" className='hover:text-black px-8 py-3 pt-2  hover:bg-white bg-emerald-500 rounded-md'>SignUp</Link> </button></a>
          </form>
        </div>
      </div>
    
    </div>  
  )
}

export default Login
import React, { useState } from 'react'
import { assets } from '../assets/greencart_assets/assets'

const LoginForm = () => {
  const [isSignUp, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onchangeHandler = async (e) => {
    let { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  return (
    <div className='fixed flex z-30 top-0 bottom-0 right-0 left-0 items-center justify-center bg-black/50'>
      <div className='bg-white shadow-[0_8px_10px_-9px_rgba(0,0,0,3)] flex flex-col items-center p-5 py-10 rounded-2xl '>
        <h2 className='text-2xl font-semibold text-primary-dark'>{isSignUp ? "SignUp" : "Login"}</h2>
        <p className='text-sm'>Please sign-in to continue</p>
        <form className='flex flex-col'>
          {isSignUp ? <input type="text" required placeholder='Enter your name' className='outline-0 border rounded-2xl px-3 mt-5 py-1' name='name' value={formData.name} onChange={onchangeHandler} /> : " "}
          <input type="email" required placeholder='Enter your email' className='outline-0 border rounded-2xl px-3 mt-5 py-1' name='email' value={formData.email} onChange={onchangeHandler} />
          <input type="password" required placeholder='Enter your password' className='outline-0 border rounded-2xl px-3 mt-5 py-1' name='password' value={formData.password} onChange={onchangeHandler} />
          <button className=" mt-5 cursor-pointer px-8 py-2 bg-emerald-500 hover:bg-emerald-600 transition text-white rounded-full">{isSignUp ? "SignUp" : "Login"}</button>
          {isSignUp ? <div>
            <p className='text-sm font-light mt-2 '>
              Already have an account?<span className='font-medium text-blue-500 cursor-pointer' onClick={() => { setIsSignup(false) }}>Login here</span>
            </p>

          </div> : <div><p className='text-sm font-light mt-2 '>Dont have an account?<span className='font-medium text-blue-500 cursor-pointer' onClick={() => { setIsSignup(true) }}>SignUp here</span></p></div>}
        </form>
      </div>
    </div>
  )
}

export default LoginForm


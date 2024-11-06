/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Login = ({handleLogin}) => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler =(e) =>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl  border-emerald-300 p-20'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col  items-center justify-center' >
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                required className=' bg-transparent outline-none border-2 border-emerald-400 text-xl py-4 px-5 rounded-full placeholder:gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className=' bg-transparent outline-none border-2 border-emerald-400 mt-3 text-xl py-4 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='text-white mt-5 bg-transparent outline-none border-none bg-orange-300 text-xl py-2 px-8 rounded-full placeholder:text-white'>Login</button>
            </form>

        </div>
      
    </div>
  )
}

export default Login

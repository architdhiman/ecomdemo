import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/auth'

const Login = () => {
  const navigate = useNavigate()
  const[auth,setAuth] = useAuth()
  const[input,setInput] = useState({email:"",password:""})

  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/auth/login',input)
      if(res.data.success===true)
      {
        setAuth({...auth,token:res.data.token})
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate('/home')        
      }
      else{
        window.alert(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <form action="submit" onSubmit={onSubmit}>
      email <input name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name] :e.target.value})}  /> <br/>
      password <input name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
      <button type='submit'>LOGIN</button>
      </form>
    </div>
  )
}

export default Login

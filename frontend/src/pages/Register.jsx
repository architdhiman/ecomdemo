import React, { useState } from 'react'
import axios from 'axios'
import {NavLink, useNavigate} from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()


  const[form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    phone:""
  })

  const handleInput = (e) =>{
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }

  const onSubmit = async(e) =>{
    e.preventDefault()
    try {        
      const res = await axios.post('http://localhost:8000/auth/register',form)
      if(res.data.success === true)
      {
        window.alert('Register Successfully')
        navigate('/login')  
      }else{
        console.log(res.data.message)
        window.alert(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }    
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
       Name  <input type="text" name='name' value={form.name} onChange={handleInput}/> <br />
       Email<input type="text" name='email' value={form.email} onChange={handleInput}/> <br />
       Password<input type="password" name='password' value={form.password} onChange={handleInput}/> <br />
       Phone <input type="number" name='phone' value={form.phone} onChange={handleInput}  /> <br />
       <button type='submit'>Submit</button> <br />
       Already a member ? <NavLink to="/login">Login</NavLink> 
       
      </form>
    </div>
  )
}

export default Register

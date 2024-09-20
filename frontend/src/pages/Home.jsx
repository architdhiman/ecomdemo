import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth([])

  const handleLogout = () =>{
    setAuth({...auth,token:""})
    localStorage.removeItem("auth")
    window.alert("Logout successfully")
    navigate("/")
  }
  
  return (
    <div>
      HomePage <button onClick={handleLogout}>LOGOUT</button>
      <br />      
      Click on Products <NavLink to={"/home/products"}><button>PRODUCTS</button></NavLink>
      Click on Cart <NavLink to={"/cart"}><button>Cart</button></NavLink>
      <Outlet/>
    </div>
  )
}

export default Home

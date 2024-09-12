import React from 'react'
import Login from "./Login"
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      Welcome to E-com <br />
      <NavLink to={"/login"}>Login</NavLink> <br />
      <NavLink to={"/register"}>Register</NavLink> <br />
    </div>
  )
}

export default Welcome

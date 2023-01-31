import React from 'react'
import "./Navbar.css"
import Logo from "../../Images/Logo.png";
export const Navbar = () => {
  return (
    <div className='Navbar'>
      
      <div className='logobody'>
        <img src={Logo} alt="" />
      </div>
      <div>
        logout
      </div>

    </div>
  )
}

import React from 'react'
import "./Navbar.css"
import Logo from "../../Images/Logo.png";
import { Sidebar } from '../Sidebar/Sidebar';

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='slo'>
      <Sidebar/>
      <div className='logobody'>
        <img src={Logo} alt="" />
      </div>
      </div>
      
      <div className='acoverview'>
      <div>
        Search
      </div>
      <div>
        Acount
      </div>
      <div>
        logout
      </div>
       
      </div>
      
    </div>
  )
}

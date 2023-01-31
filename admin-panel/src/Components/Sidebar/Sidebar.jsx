import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
      Admin<br/>
     <Link to="/">Dashboard</Link><br/>
     <Link to="/allproduct">allproduct</Link><br/>
     <Link  to="/addproduct">addproduct</Link><br/>
     <Link  to="/order">order</Link><br/>
     <Link  to="/">F&Qs</Link><br/>
  
     <Link  to="/admininfo">admininfo</Link>


    </div>
  )
}

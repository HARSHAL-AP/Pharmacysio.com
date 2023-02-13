import React,{useState} from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import Logo from "../../Images/Logo.png";
import { AiFillAppstore } from "react-icons/ai";
export const Sidebar = () => {
  const [mobail,setmobail]=useState(false)
  return (
    <>

    <button className='togalbtntosidebar' onClick={()=>setmobail(!mobail)}><AiFillAppstore/></button>
     <div className={mobail?"Sidebar":"mobilsidebar"}>
      

      <div className='sidelincontener' onClick={()=>setmobail(!mobail)}>
      <Link to="/">Dashboard</Link><br/>
      </div>
      <div className='sidelincontener' onClick={()=>setmobail(!mobail)}>
      <Link to="/allproduct">allproduct</Link><br/>
      </div>
      <div className='sidelincontener' onClick={()=>setmobail(!mobail)}>
      <Link  to="/addproduct">addproduct</Link><br/>
      </div>
     <div className='sidelincontener' onClick={()=>setmobail(!mobail)}>
     <Link  to="/order">order</Link><br/>
     </div>
     <div className='sidelincontener' onClick={()=>setmobail(!mobail)}>
     <Link  to="/">F&Qs</Link><br/>
     </div>
     <div className='sidelincontener' onClick={()=>setmobail(!mobail)}>
     <Link  to="/admininfo">admininfo</Link>
     </div>
  
   


    </div>
    </>
   
  )
}

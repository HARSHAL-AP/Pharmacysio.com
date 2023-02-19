import React from 'react'
import "./Fotter.css"
import mlogo from "../../Images/Logo/mlogo.png"

export const Fotter = () => {
  return (
    <>
     <div className='foter'>
      <div>Medicine</div>
      <div>Healthcare</div>
      <div>Lab Tests</div>
      <div>Fruits & Vegitables</div>
      <div><img src={mlogo} alt="" className='logomfoter'/></div>
     </div>
     <div className='subfoter'>
     Copyright© 2023. All Rights Reserved.
     </div>
    </>
   
  )
}

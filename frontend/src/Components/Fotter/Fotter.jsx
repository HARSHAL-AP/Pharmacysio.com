import React from 'react'
import "./Fotter.css"
import logom from "../../Images/logom.jpg"

export const Fotter = () => {
  return (
    <>
     <div className='foter'>
      <div>Medicine</div>
      <div>Healthcare</div>
      <div>Lab Tests</div>
      <div>Fruits & Vegitables</div>
      <div><img src={logom} alt="" className='logomfoter'/></div>
     </div>
     <div className='subfoter'>
     Copyright© 2023. All Rights Reserved.
     </div>
    </>
   
  )
}

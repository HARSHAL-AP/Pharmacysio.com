import React from 'react'
import "./Labcard.css"


export const LabCard = ({elem}) => {
  return (
    <div className='labcarbody'>
        <div className='imgltd'>  <img src="https://cdn-icons-png.flaticon.com/512/2971/2971555.png" alt="" /></div>
      
        <div className='subtext'>
          <h1>{elem.title}</h1>
          <p>₹ {elem.price}</p>
          <button>Book Now</button>
        </div>
    </div>
  )
}

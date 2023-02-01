import React from 'react'
import "./Singleitem1.css"


export const Singleitem1 = ({obj}) => {
   
  return (
    <div className='conbody'>
      <div className='conimgcone'><img src={obj.image} alt="" className='conbodyimg'/></div>
    <h1 className='conheag'>{obj.title}</h1>
    <p className='mrpcon'>MRP:{obj.price}</p>
    <p className='consealp'>₹{obj.saleprice}   <span>{obj.discount}% OFF</span></p>
    </div>
  )
}

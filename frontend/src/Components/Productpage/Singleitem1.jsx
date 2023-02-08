import React from 'react'
import "./Singleitem1.css"
import { useNavigate } from "react-router-dom";

export const Singleitem1 = ({obj}) => {
  const navigate = useNavigate();
   const Handljump=(id)=>{
    navigate(`/Singleproduct/${id}`)
   }
  return (
    <div className='conbody' onClick={()=>Handljump(obj._id)}>
      <div className='conimgcone'><img src={obj.image} alt="" className='conbodyimg'/></div>
    <h1 className='conheag'>{obj.title}</h1>
    <p className='mrpcon'>MRP:{obj.price}</p>
    <p className='consealp'>₹{obj.saleprice}   <span>{obj.discount}% OFF</span></p>
    </div>
  )
}

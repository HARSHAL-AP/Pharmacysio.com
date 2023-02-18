import { React, useEffect, useState } from "react";
import "./Farmerp.css"
import Loder from "../../Images/Loder.gif"
import { AiOutlineFileAdd } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Farpcard = ({obj}) => {
  
  let data=useSelector((store)=>store.Productreducer.isLoading)
 if(data){
  return (
    <div className="cardbody"><img src={Loder} alt="" className="loder"/></div>
  )
 }
else{
  return (
    <>
     
      <div className="cardbody">
       
        <div className="imgb">
          <img src={obj.image} alt="" />
        </div>
        <div className="datab">
          <h1 className="cardheading">{obj.title}</h1>
          
          <p className="cname">{obj.discount}%</p>
          <p className="carinfo">{obj.price}₹ OFF</p>
          <div className="pricecard">
            <p>MRP ₹{obj.saleprice}</p> <button>Add</button>
          </div>
          
        </div>
      </div>
    </>
  );
}
}
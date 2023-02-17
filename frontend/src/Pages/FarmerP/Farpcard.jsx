import { React, useEffect, useState } from "react";
import "./Farmerp.css"
import Loder from "../../Images/Loder.gif"
import { AiOutlineFileAdd } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Farpcard = ({obj}) => {
  let objj={
    "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109022.jpg",
    "discount": "32%",
    "title": "Starfresh Tomato",
    "price": "₹25.00"
   }
  let data=false
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
          <img src={objj.image} alt="" />
        </div>
        <div className="datab">
          <h1 className="cardheading">{objj.title}</h1>
          
          <p className="cname">{objj.discount}</p>
          <p className="carinfo">{objj.price}</p>
          <div className="pricecard">
            <p>MRP ₹{objj.price}</p> <button>Add</button>
          </div>
          
        </div>
      </div>
    </>
  );
}
}
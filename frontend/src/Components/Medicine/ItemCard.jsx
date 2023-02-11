import { React, useEffect, useState } from "react";
import "./ItemCard.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useSelector } from "react-redux";
import Loder from "../../Images/Loder.gif"
export const ItemCard = ({obj}) => {
  const data=useSelector((store)=>store.Productreducer.isLoading)

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
          <h1 className="cardheading">{obj.drug_name}</h1>
          <p className="prequire"><AiOutlineFileAdd className="cardconi"/>{obj.prescription_required?"Prescription Required":"Prescription Not Required"}</p>
          <p className="cname">{obj.company}</p>
          <p className="carinfo">{obj.pack_info}</p>
          <div className="pricecard">
            <p>MRP ₹{obj.price}</p> <button>Add</button>
          </div>
          
        </div>
      </div>
    </>
  );
}
  
};

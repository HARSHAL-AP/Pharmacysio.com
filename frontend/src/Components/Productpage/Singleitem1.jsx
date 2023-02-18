import React from 'react'
import "./Singleitem1.css"
import { useNavigate } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useSelector } from "react-redux";
import Loder from "../../Images/Loder.gif"
export const Singleitem1 = ({obj}) => {
  const navigate = useNavigate();
  const data=useSelector((store)=>store.Productreducer.isLoading)

   const Handljump=(id)=>{
    navigate(`/Singleproduct/${id}`)
   }
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
            <p className="prequire"><AiOutlineFileAdd className="cardconi"/>{obj.prescription_required?"Prescription Required":"Prescription Not Required"}</p>
            
            <div className="pricecard">
              <p>MRP ₹{obj.price}</p> 
            </div>
            
          </div>
        </div>
      </>
    );
  }
}

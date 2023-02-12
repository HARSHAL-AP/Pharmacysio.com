import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Fotter } from "../../../Components/Fotter/Fotter";
import "./Singleproduct.css";
import { FaStar } from "react-icons/fa";
import { addtocart } from "../../../Redux/authreducer/action";
import { useDispatch } from "react-redux";
import { MenuItem } from "@chakra-ui/react";

export const Singleproduct = () => {
  const dispatch=useDispatch()
  const [data, setdata] = useState({});
  const [item,setitem]=useState({
    
  })
  const [Count,setCount]=useState(1)
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APILINK}/product//byid/${id}`)
      .then((r) => {
        setdata(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const Handleadd=()=>{
  let item={...data,"quantity":Count}
  console.log(item)
  dispatch(addtocart(item))
 
  }

  return (
    <>
      <Navbar />
      <div className="singlebodu">
        <div className="imgbody-sing1">
          <img src={data.image} alt="" />
        </div>
        <div className="decscbody-sing1">
          <h1 className="protitle">{data.title}</h1>
          <div className="ratingstars">
            
              <FaStar />
            
            <p>{Math.floor(data.rating)} Ratings </p>
          </div>

          <h1 className="salpirce">
            ₹{data.saleprice||data.Saleprice} <span>(Inclusive of all taxes )</span>
          </h1>
          <div className="discountoff">
          <h1 className="mrpprice">MRP ₹ {data.price} </h1><span>{data.discount} % OFF</span>
            </div>
         <div className="qtyadjuster">
         <button onClick={()=>setCount(Count-1)} disabled={Count == 1 ? true : false}>-</button>
          
          <p>{Count}</p>
          <button onClick={()=>setCount(Count+1)}>+</button>
         </div>
          <button className="addtocartbtn" onClick={Handleadd}>Add To Cart</button>
        </div>
      </div>

      <Fotter />
    </>
  ); 
};

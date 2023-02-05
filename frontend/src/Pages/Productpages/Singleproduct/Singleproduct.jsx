import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Fotter } from "../../../Components/Fotter/Fotter";
import "./Singleproduct.css";
import { FaStar } from "react-icons/fa";

export const Singleproduct = () => {
  const [data, setdata] = useState({});
  const {count,setcount}=useState(0)
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://average-lime-wildebeest.cyclic.app/product//byid/${id}`)
      .then((r) => {
        setdata(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const array = Array(data.rating).fill(0);

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
            {array.map((index) => (
              <FaStar key={index} />
            ))}{" "}
            <p>(1122 ratings) </p>
          </div>

          <h1 className="salpirce">
            ₹{data.saleprice} <span>(Inclusive of all taxes )</span>
          </h1>
          <div className="discountoff">
          <h1 className="mrpprice">MRP ₹ {data.price} </h1><span>{data.discount} % OFF</span>
            </div>
         <div className="qtyadjuster">
          <button onClick={()=>setcount(count+1)}>+</button>
          <p>{count}</p>
          <button onClick={()=>setcount(count-1)}>-</button>
         </div>
          <button className="addtocartbtn">Add To Cart</button>
        </div>
      </div>

      <Fotter />
    </>
  ); 
};

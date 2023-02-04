import React,{useEffect,useState} from "react";
import "./pstyle.css";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Fotter } from "../../../Components/Fotter/Fotter";
import { getProduct } from "../../../Redux/Productreducer/action";
import {Singleitem1} from "../../../Components/Productpage/Singleitem1"

import { useDispatch,useSelector } from "react-redux/es/exports";

export const Covidessential = () => {
    const dispatch=useDispatch()
    const product=useSelector((store)=>store.products)
    
    useEffect(()=>{
    
        dispatch(getProduct())
    



    },[dispatch])
    console.log(product)
  return (
    <>
      <Navbar />
      <h1 className="mainheadingofpage">Covid Essentials</h1>
      <div className="mainbody">
        <div className="filbody">
          <div className="filcatebody">
            <h1 className="fillcatheadin12">Sort By</h1>
            <div className="fillin876">
              <div>
                <p>Discount</p>
                <input type="Checkbox" />
              </div>
              <div>
                <p>Price Low to high</p>
                <input type="Checkbox" />
              </div>
              <div>
                <p>Price high to Low</p>
                <input type="Checkbox" />
              </div>
              <div>
                <p>Discount</p>
                <input type="Checkbox" />
              </div>
            </div>
          </div>

          <div className="filcatebody">
            <h1 className="fillcatheadin12">Price</h1>
            <div className="fillin876">
              <div>
                <p>Below 99</p>
                <input type="Checkbox" />
              </div>
              <div>
                <p>Below 200</p>
                <input type="Checkbox" />
              </div>
              <div>
                <p>Below 300</p>
                <input type="Checkbox" />
              </div>
              <div>
                <p>Below 400</p>
                <input type="Checkbox" />
              </div>
              <div>
                <p>Below 500</p>
                <input type="Checkbox" />
              </div>
            </div>
          </div>
        </div>
        <div className="probody">
    {
        product&&product.map((el, index) => {
            return <Singleitem1 key={index} obj={el} />;
          })}

        </div>
      </div>
      <Fotter />
    </>
  );
};

import React,{useEffect,useState} from "react";
import { Filter } from "./Filter";
import "./pstyle.css";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Fotter } from "../../../Components/Fotter/Fotter";
import { getProduct } from "../../../Redux/Productreducer/action";
import {Singleitem1} from "../../../Components/Productpage/Singleitem1"

import { useDispatch,useSelector } from "react-redux/es/exports";

export const Covidessential = () => {
    const dispatch=useDispatch()
    
    const product=useSelector((store)=>store.Productreducer.products)
    
    useEffect(()=>{
    
        dispatch(getProduct())
    



    },[dispatch])
    console.log(product)
  return (
    <>
      <Navbar />
      <h1 className="mainheadingofpage">Covid Essentials</h1>
      <div className="mainbody">
        <Filter/>
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

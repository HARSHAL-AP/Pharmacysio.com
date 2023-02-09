import React,{useEffect,useState} from "react";
import { Filter } from "./Filter";
import "./pstyle.css";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Fotter } from "../../../Components/Fotter/Fotter";
import { getProduct } from "../../../Redux/Productreducer/action";
import {Singleitem1} from "../../../Components/Productpage/Singleitem1"
import { useLocation,useSearchParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux/es/exports";

export const Homecare = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const [searchParams]=useSearchParams()
    const product=useSelector((store)=>store.Productreducer.products)
    
    useEffect(()=>{
     if(location||product.length===0){
      const getProductParams={
        parmas:{
          category:"homecare",
          sort:searchParams.get("sort"),
          price:searchParams.get("price")  
        }
      }
      dispatch(getProduct(getProductParams))
     }
        
    




    },[dispatch,location.search,product.length,searchParams])
   
  return (
    <>
      <Navbar />
      <h1 className="mainheadingofpage">Home care</h1>
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

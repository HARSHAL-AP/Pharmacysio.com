import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Fotter } from "../../Components/Fotter/Fotter";
import { Alphabets } from "../../Components/Medicine/Alphabets";
import { Pagination } from "../../Components/Medicine/Pagination";
import { ItemCard } from "../../Components/Medicine/ItemCard";
import "./Medicine.css";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import mlogo from "../../Images/Logo/mlogo.png"

export const Medicine = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Productreducer.medicine);
  return (
    <>
      <Navbar />
      <section className="searchp">
        <img src={mlogo} alt="" className="addlog"/>
         <h1 className="medadhead">Flat 25% off Medicin order</h1>
         <h2 className="meaddacode">CODE:PHARMA25</h2>
      </section>
      <h1 className="medheadig">Find Your Prescription Medicines</h1>
      
      <Alphabets />
      <div className="medbody">
        {data.map((e) => {
          return <ItemCard key={e._id} obj={e} />;
        })}
      </div>

      <Pagination />
      <Fotter />
    </>
  );
};

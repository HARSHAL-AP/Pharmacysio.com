import React, { useEffect, useState } from "react";
import "./Farmerp.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Fotter } from "../../Components/Fotter/Fotter";
import { Farpcard } from "./Farpcard";
import { Pagination } from "../../Components/Medicine/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getFarmerpro } from "../../Redux/Productreducer/action";

export const Farmerpro = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const data = useSelector((store) => store.Productreducer.farmerp);

  useEffect(() => {
    if (location || data.length === 0) {
      const getParams = {
        page: searchParams.get("page"),
      };
      dispatch(getFarmerpro(getParams));
    }
  }, [location.search, data.length, searchParams]);

  return (
    <>
      <Navbar />
      <section className="topaddf">
        <div><h1>Treat Yourself Organic!</h1></div>
      </section>
      <div className="probody">
        {data.map((e, index) => {
          return <Farpcard key={index} obj={e} />;
        })}
      </div>
      <Pagination />
      <Fotter />
    </>
  );
};

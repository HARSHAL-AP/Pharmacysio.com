import React, { useState, useEffect } from "react";
import "./Labtest.css";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Fotter } from "../../../Components/Fotter/Fotter";
import { LabCard } from "../../../Components/Labtest/LabCard";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getLabtests } from "../../../Redux/Productreducer/action";
import { Input, FormLabel, Select, Button } from "@chakra-ui/react";
export const Labtest = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.Productreducer.labtest);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getLabtests());
    }
  }, [data.length]);
  const inputStyle = {
    size: "sm",

    errorBorderColor: "crimson",
    focusBorderColor: "#38B2AC",
  };
  console.log(data);
  return (
    <>
      <Navbar />
      <h1 className="Labtestheading">Lab Tests</h1>
      <div className="Selectlocbox">
        <div className="labimg"></div>
        <div className="booknowcontener">
          <h1 className="booknoeh1">
            Book your Full Body Checkup with vitamin D & B12 at Rs.999 (550 CB)
          </h1>
          <p>Our experts will call back for booking an appointment.</p>
          <FormLabel fontSize="sm" mt="2">
            Name
          </FormLabel>
          <Input placeholder="Name" {...inputStyle} />
          <FormLabel fontSize="sm" mt="2">
            Phone Number
          </FormLabel>
          <Input placeholder="Phone Number" size="sm" />
          <Button mt={5} bg="rgb(100, 49, 110)" color="white">
            {" "}
            Request Free Callback Now
          </Button>
        </div>
      </div>

      <p className="descpara">
        Book Comprehensive Full Body Checkup with Vitamin D and B12 package that
        includes 83 tests that help in better understanding of your overall
        health condition. This blood test of full body checkup along with
        vitamin D and B12 test is ideal for people between 30-40 years of age
        who often experience weakness & fatigue. You can also conveniently get
        the blood sample collected from home done safely and avali report with
        48 hours. This package includes: CBC (28), RBS/FBS, Average Blood Sugar,
        Kidney Function Test (5), Lipid Profile (8), Liver Function Test (11),
        Thyroid profile (3), Urine Complete Analysis (24), Iron Profile (3),
        HbA1c, Vitamin D, Vitamin B12. On Time Of Free Offer is Live, We'll
        Collect your Blood Sample on Time or your Health Checkup is Absolutely
        Free, Book now to avail this Offer.
      </p>
      <h1 className="subhelat">All Test</h1>
      <div className="alltests">
        {data.map((el, index) => {
          return <LabCard key={index} elem={el} />;
        })}
      </div>
      <Fotter />
    </>
  );
};

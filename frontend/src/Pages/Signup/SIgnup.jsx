import React, { useState, useEffect } from "react";
import "./Signup.css";
import mlogo from "../../Images/Logo/mlogo.png";
import signuppr from "../../Images/signuppr.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

export const SIgnup = () => {
  const navigate = useNavigate();
  const toast = useToast()
  const [user, setuser] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "",
   
    address: {},
    phone_number: "",
   
  });
  const [sucsess, setsucsess] = useState(false);

  const Handlesubmit = () => {
    if(user.first_name==""||user.password===""||user.email===""||user.phone_number===""){
      handleerr()
    }
    else{
      axios
      .post(`${process.env.REACT_APP_APILINK}/user/register`, user)
      .then((r) => {
        setsucsess(true);
      })
      .then(() => shosucsess())
      .catch((e) => {
        handleerr();
      });
    }
    
  };
  const Handlenavigate = () => {
    setsucsess(false);
    navigate("/login");
  };
  const shosucsess = () => {
    if (sucsess) {
      document.getElementById("contextd").style.display = "none";
      document.getElementById("sucsessd").style.display = "block";
    }
  };

  const handleerr=()=>{
    toast({
      title: `Somthing Went Wrong Please Try Again`,
      status:'error',
      isClosable: true,
    })
  }
  return (
    <>
      <div className="sucsesssmsg" id="sucsessd">
        <img
          src="https://static.vecteezy.com/system/resources/previews/017/639/144/non_2x/account-has-been-registered-login-success-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          alt=""
        />
        <h1>Thanks! your account has been successfully created.</h1>
        <p>Please Login your account to continew..</p>
        <button onClick={Handlenavigate}>OK</button>
      </div>
      <div className="contextt" id="contextd">
        <div className="contexaddd">
          <img src={signuppr} alt="" />
          <h1 className="welcomtag">WELCOME to Pharmasio.com</h1>
          <p className="slogan">
            We help you to get fit for the better Tomorrow.
          </p>
        </div>
        <div className="conextconterlogin">
          <h1 className="welheadign">Create Acount! </h1>

          <div className="inputconter">
            <input
              type="text"
              className="contexinput"
              placeholder="Enter Username"
              value={user.first_name}
              onChange={(e) => setuser({ ...user, first_name: e.target.value })}
            />
            <input
              type="email"
              className="contexinput"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
            <input
              type="mobailnumber"
              className="contexinput"
              placeholder="Mobail No"
              value={user.phone_number}
              onChange={(e) => setuser({ ...user, phone_number: e.target.value })}
            />
            <input
              type="Password"
              className="contexinput"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />

            <button className="lginbtn" onClick={Handlesubmit}>
              Signup
            </button>
          </div>
          <p className="dnhac">Allready have an acount?</p>
          <a href="/login" className="siglink">
            Log In
          </a>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

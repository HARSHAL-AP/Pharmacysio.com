import React, { useState, useEffect } from "react";
import "./Login.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Fotter } from "../../Components/Fotter/Fotter";
import mlogo from "../../Images/Logo/mlogo.png";
import { useNavigate } from "react-router-dom";
import { loginuser } from "../../Redux/authreducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from '@chakra-ui/react'

export const Login = () => {
  const toast = useToast()
  const disptch = useDispatch();
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const acouser = useSelector((store) => store.Authreducer);
  const iserr = useSelector((store) => store.Authreducer.isAuthError);
  const isAuth=useSelector((store) => store.Authreducer.isAuth);
  const HandleLogin = () => {
    if(user.password===""||user.email===""){
      toast({
        title: `Please Enter write Credential to login...`,
        status:'error',
        isClosable: true,
      })
    }
    else{
      disptch(loginuser(user)).then( ()=>Sucseser())
    }
   
  };

  const Sucseser = () => {
    if(isAuth){
      document.getElementById("contextd").style.display = "none";
      document.getElementById("sucsessd").style.display = "block";
    }
    else{
      toast({
        title: `Somthing Went Wrong Please Try Again`,
        status:'error',
        isClosable: true,
      })
    }
  };
  const Handlenavigate = () => {
    navigate("/");
  };
  return (
    <>
      <div className="sucsesssmsg" id="sucsessd">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/163/927/original/login-success-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          alt=""
        />
        <h1>Welcome again! 'You are successfully logged in.</h1>
        <p>Please click on ok to continew..</p>
        <button onClick={Handlenavigate}>OK</button>
      </div>
      <div className="context" id="contextd">
        <div className="contexadd">
        
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/174/506/non_2x/female-pharmacist-doing-her-job-dispensing-medicine-free-vector.jpg"
            alt=""
            className="contextaddimg"
          />
        </div>
        <div className="conextconterlogin">
          
          <h1 className="welheadign">Hellow Again! </h1>
          <p className="enterdtails">Welcome to Pharmacio.com</p>
          <p className="enterdtails">please enter Your details</p>
          <div className="inputconter">
            <input
              type="text"
              className="contexinput"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
            <input
              type="Password"
              className="contexinput"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
            <button className="lginbtn" onClick={HandleLogin}>
              Login
            </button>
            <p className="forgotp">Forgot Password</p>
          </div>
          <p className="dnhac">Don't have acount yet?</p>
          <a href="/signup" className="siglink">
            Create an Acount
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

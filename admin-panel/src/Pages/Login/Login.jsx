import React, { useState, useEffect } from "react";
import "./Login.css";
import mlogo from "../../Images/mlogo.png";
import { Button } from "@chakra-ui/react";
import loginimg from "../../Images/loginimg.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { loginuser } from "../../redux/authreducer/action";

export const Login = () => {
  const toast = useToast();
  const disptch = useDispatch();
  const navigate = useNavigate();
  const [admin, setadmin] = useState({
    email: "",
    password: "",
  });
  const acouser = useSelector((store) => store.Authreducer);
  const iserr = useSelector((store) => store.Authreducer.isAuthError);
  const isAuth = useSelector((store) => store.Authreducer.isAuth);
  const handlesubmit = () => {
    if (admin.password === "" || admin.email === "") {
      toast({
        title: `Please Enter write Credential to login...`,
        status: "error",
        isClosable: true,
      });
    } else {
      disptch(loginuser(admin)).then(() => Sucseser());
    }
  };
  const Sucseser = () => {
    if (isAuth) {
      document.getElementById("contextd").style.display = "none";
      document.getElementById("sucsessd").style.display = "block";
      
    } else {
      toast({
        title: `Somthing Went Wrong Please Try Again`,
        status: "error",
        isClosable: true,
       
      });
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
        <div className="loginconter">
          <img src={mlogo} alt="" className="logimg" />
          <h1 className="logheading">Login to Pharmasio Admin</h1>

          <div className="logindiv">
            <input
              type="email"
              placeholder="Email"
              value={admin.email}
              className="loginput"
              onChange={(e) => setadmin({ ...admin, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={admin.password}
              className="loginput"
              onChange={(e) => setadmin({ ...admin, password: e.target.value })}
            />
          </div>
          <div className="loginbtn" onClick={handlesubmit}>
            Login
          </div>
          <img src={loginimg} alt="" />
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

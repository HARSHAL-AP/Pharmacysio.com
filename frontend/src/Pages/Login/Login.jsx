import React from "react";
import "./Login.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Fotter } from "../../Components/Fotter/Fotter";
import Logo from "../../Images/Logo.png"


export const Login = () => {
 

  return (
    <>
      <div class="context">
        <div className="contexadd">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/174/506/non_2x/female-pharmacist-doing-her-job-dispensing-medicine-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="conextconterlogin">
          <img src={Logo} alt="" className="loglogo"/>
          <h1 className="welheadign">Hellow Again!  </h1>
          <p className="enterdtails">please enter Your details</p>
          <div className="inputconter">
            <input type="text" className="contexinput" placeholder="Email"/>
            <input type="Password" className="contexinput" placeholder="Password"/>
            <button className="lginbtn">Login</button>
            <p className="forgotp">Forgot Password</p>

          </div>
          <p className="dnhac">Don't have acount yet?</p>
          <a href="/signup" className="siglink">Create an Acount</a>
        </div>
      </div>

      <div class="area">
        <ul class="circles">
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

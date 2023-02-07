import React from 'react'
import "./Signup.css"
import Logo from "../../Images/Logo.png"
import signuppr from "../../Images/signuppr.jpg"
export const SIgnup = () => {
  return (
    <>
      <div class="contextt">
        <div className="contexaddd">
          <img src={signuppr} alt="" />
          <h1 className='welcomtag'>Welcome To Pharmacysio.com</h1>
         <p className='slogan'>We help you to get fit for the better Tomorrow.</p>

        </div>
        <div className="conextconterlogin">
          
          <h1 className="welheadign">Create Acount!  </h1>
          
          <div className="inputconter">
          <input type="text" className="contexinput" placeholder="Enter Username"/>
            <input type="text" className="contexinput" placeholder="Email"/>
            <input type="text" className="contexinput" placeholder="Mobail No"/>
            <input type="Password" className="contexinput" placeholder="Password"/>
            <button className="lginbtn">Signup</button>
            

          </div>
          <p className="dnhac">Allready have an acount?</p>
          <a href="/login" className="siglink">Log In</a>
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
}

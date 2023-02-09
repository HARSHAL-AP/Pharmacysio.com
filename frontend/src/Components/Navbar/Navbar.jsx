import React from "react";
import "./Navbar.css";
import Logo from "../../Images/Logo.png";
import { Link,useNavigate } from "react-router-dom";
import {AiOutlineShopping,AiOutlineEnvironment,AiOutlineHeart,AiOutlineUser,AiOutlineMenu} from "react-icons/ai"

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="navbar01">
        <div className="navbody">
          <div className="logobody">
            <img src={Logo} alt="" onClick={()=>navigate("/")}/>
          </div>
          <div className="acsections01">
            <button className="navbtmns"><AiOutlineEnvironment/><h2 className="navlinkheadings">Get Location</h2></button>
            <button className="navbtmns">
              <Link to="/login" className="navbtnlinks"><AiOutlineUser/><h2 className="navlinkheadings">Login</h2></Link>
            </button>
            <button className="navbtmns">
              <Link to="/wishlist" className="navbtnlinks"><AiOutlineHeart/><h2 className="navlinkheadings">Wishlist</h2></Link>
            </button >
            <button className="navbtmns">
              <Link to="/cart" className="navbtnlinks"><AiOutlineShopping/><h2 className="navlinkheadings">Cart</h2></Link>
            </button>
            <button className="drowermenue"><AiOutlineMenu /></button>
          </div>
        </div>
      </div>
      <div className="subnav">
      <h2>Medicine</h2>
      <Link to="/labtests">Lab Test</Link>
      <h2>Track Your Health</h2>
      <h2>Farmer Products</h2>
      <h2>Cosmatics</h2>
      <h2>Store</h2>

      </div>
    </>
  );
};

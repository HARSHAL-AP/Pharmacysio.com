import React,{useState,useEffect} from "react";
import "./Navbar.css";
import Logo from "../../Images/Logo.png";
import { Link,useNavigate } from "react-router-dom";
import {AiOutlineShopping,AiOutlineEnvironment,AiOutlineHeart,AiOutlineUser,AiOutlineMenu,AiOutlineFileAdd} from "react-icons/ai"
import { useSelector } from "react-redux";
import locationFn from "./getlocation"

export const Navbar = () => {
  const navigate=useNavigate()
  const [location, setLocation] = useState({});
  const user=useSelector(store=>store.Authreducer)
  const username=user.userdata.first_name
  
  useEffect(() => {
   
    locationFn().then((res) => {
      setLocation(JSON.parse(localStorage.getItem("location")));
    });
  }, []);
  return (
    <>
      <div className="navbar01">
        <div className="navbody">
          <div className="logobody">
            <img src={Logo} alt="" onClick={()=>navigate("/")}/>
          </div>
          <div className="acsections01">
            <button className="navbtmns" ><AiOutlineEnvironment/><h2 className="navlinkheadings">{location.district}</h2></button>
            <button className="navbtmns">
              <Link to="/upload" className="navbtnlinks"><AiOutlineFileAdd/><h2 className="navlinkheadings">Upload</h2></Link>
            </button>
            <button className="navbtmns">
              <Link to={user.isAuth?"/acount":"/login"} className="navbtnlinks"><AiOutlineUser/><h2 className="navlinkheadings">{user.isAuth?username:"Login"}</h2></Link>
            </button>
            
            <button className="navbtmns">
              <Link to="/cart" className="navbtnlinks"><AiOutlineShopping/><h2 className="navlinkheadings">Cart</h2></Link>
            </button>
            <button className="drowermenue"><AiOutlineMenu /></button>
          </div>
        </div>
      </div>
      <div className="subnav">
      <Link to="/medicine">Medicine</Link>
      <Link to="/labtests">Lab Test</Link>
      <h2>Track Your Health</h2>
      <Link to="/farmerproduct">Farmer Products</Link>
      <h2>Cosmatics</h2>
      <h2>Store</h2>

      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import mlogo from "../../Images/Logo/mlogo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineShopping,
  AiOutlineEnvironment,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import locationFn from "./getlocation";
import { GiMedicines, GiFruitBowl } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import { CgGirl } from "react-icons/cg";
import { BiCurrentLocation } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({});
  const user = useSelector((store) => store.Authreducer);
  const username = user.userdata.first_name;
  const [eearch, setsearch] = useState("");
  const [sdata, setsdata] = useState([]);
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
            <img src={mlogo} alt="" onClick={() => navigate("/")} />
          </div>
          
          <div className="acsections01">
            <button className="navbtmns">
              <AiOutlineEnvironment />
              <h2 className="navlinkheadings">{location.district}</h2>
            </button>
            <button className="navbtmns">
              <Link to="/upload" className="navbtnlinks">
                <AiOutlineFileAdd />
                <h2 className="navlinkheadings">Upload</h2>
              </Link>
            </button>
            <button className="navbtmns">
              <Link
                to={user.isAuth ? "/acount" : "/login"}
                className="navbtnlinks"
              >
                <AiOutlineUser />
                <h2 className="navlinkheadings">
                  {user.isAuth ? username : "Login"}
                </h2>
              </Link>
            </button>

            <button className="navbtmns">
              <Link to="/cart" className="navbtnlinks">
                <AiOutlineShopping />
                <h2 className="navlinkheadings">Cart</h2>
              </Link>
            </button>
            <button className="drowermenue">
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </div>
      <div className="subnav">
        <Link to="/medicine" className="subnavlinks">
          <GiMedicines />
          Medicine
        </Link>
        <Link to="/labtests" className="subnavlinks">
          <SlChemistry />
          Lab Test
        </Link>

        <Link to="/farmerproduct" className="subnavlinks">
          <GiFruitBowl />
          Farmer Products
        </Link>
        <Link to="/" className="subnavlinks">
          <CgGirl />
          Cosmatics
        </Link>
        <Link to="/" className="subnavlinks">
          <BiCurrentLocation />
          Store
        </Link>
      </div>
    </>
  );
};

import React from "react";
import "./Home.css";
import Slider from "react-slick";
import { Navbar } from "../../Components/Navbar/Navbar";
import Slide1 from "../../Images/Slide1.png";
import Slide3 from "../../Images/Slide3.png";
import Slide4 from "../../Images/Slide4.png";
import { Link } from "react-router-dom";
import {Fotter} from "../../Components/Fotter/Fotter"
import { Preiscription } from "../../Components/Prescription/Preiscription";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate=useNavigate()
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar />

      <Slider {...settings} className="slid">
        <img src={Slide1} alt="" className="Slide1" onClick={()=>navigate("/medicine")}/>

        <img src={Slide3} alt="" className="Slide1" onClick={()=>navigate("/farmerproduct")}/>

        <img src={Slide4} alt="" className="Slide1" onClick={()=>navigate("/medicine")}/>
      </Slider>
      <div className="productdetails">
        <div className="categryhomedi">
          <img
            src="https://cdn-icons-png.flaticon.com/512/172/172011.png"
            alt=""
            className="cateiconimg-9"
          />
          <Link to="/medicine">Medicine</Link>
        </div>
        <div className="categryhomedi">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3127/3127109.png"
            alt=""
            className="cateiconimg-9"
          />
          <Link to="/labtests">Lab Test</Link>
        </div>
        <div className="categryhomedi">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2791/2791163.png"
            alt=""
            className="cateiconimg-9"
          />
          <Link to="/product">Healthcares</Link>
        </div>
        <div className="categryhomedi">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1617/1617560.png"
            alt=""
            className="cateiconimg-9"
          />
          <Link to="/farmerproduct">Fruits & Vegitables</Link>
        </div>
        <div className="categryhomedi">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3501/3501241.png"
            alt=""
            className="cateiconimg-9"
          />
          <Link to="/skincare">Cosmatics</Link>
        </div>
      </div>
 <Preiscription/>

      
      <Fotter/>
    </>
  );
};

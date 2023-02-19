import React from "react";
import "./Home.css";
import Slider from "react-slick";
import { Navbar } from "../../Components/Navbar/Navbar";
import Slide1 from "../../Images/Slide1.png";
import Slide3 from "../../Images/Slide3.png";
import Slide4 from "../../Images/Slide4.png";
import { Link } from "react-router-dom";
import { Fotter } from "../../Components/Fotter/Fotter";
import { Preiscription } from "../../Components/Prescription/Preiscription";
import { useNavigate } from "react-router-dom";
import sl1 from "../../Images/sliimg/sl1.jpg";
import mlogo from "../../Images/Logo/mlogo.png";
import { FcDebt, FcUnlock, FcTodoList } from "react-icons/fc";
export const Home = () => {
  const navigate = useNavigate();
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

      <div className="Slide1">
        <div className="mailns">
        <img src={sl1} alt="" className="dimno"/>
          <h1 className="addhead">Welcome to Pharmasio.com</h1>
          <p className="adddesc">
            Find the right care right when you need it. Start by
            choosing your reason for visit and we’ll help you find the right
            care....
          </p>
          <div className="idcsbtn">
            Discover Our Products
          </div>
        </div>

        <img src={sl1} alt="" />
      </div>

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
      <Preiscription />
      <div className="adcontener">
        <div>
          
          <FcTodoList className="addicon" />
          <h1>Reliable</h1>
          <p>
            All products displayed on Pharmacysio are procured from verified and
            licensed pharmacies. All labs listed on the platform are accredited
          </p>
        </div>

        <div>
          <FcUnlock className="addicon" />

          <h1>Secure</h1>
          <p>
            Pharmacysio uses Secure Sockets Layer (SSL) 128-bit encryption and
            is Payment Card Industry Data Security Standard (PCI DSS) compliant
          </p>
        </div>

        <div>
          <FcDebt className="addicon" />

          <h1>Affordable</h1>
          <p>
            Find affordable medicine substitutes, save up to 50% on health
            products, up to 80% off on lab tests and free doctor consultations.
          </p>
        </div>
      </div>
      <Fotter />
    </>
  );
};

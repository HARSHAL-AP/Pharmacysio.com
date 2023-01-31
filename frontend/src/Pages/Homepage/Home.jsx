import React from "react";
import "./Home.css";
import Slider from "react-slick";
import { Navbar } from "../../Components/Navbar/Navbar";
import Slider1 from "../../Images/Slide1.png"
import Slider3 from "../../Images/Slide3.png"
import Slider4 from "../../Images/Slide4.png"
import {Link} from "react-router-dom"
export const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
 
  };

  return (
    <>
      <Navbar />
   
        <Slider {...settings} className="slid">
        
        
            <img src={Slider1} alt="" className="Slide1"/>
          
          
          <img src={Slider3} alt="" className="Slide1"/>
          
          <img src={Slider4} alt="" className="Slide1"/>
          
        </Slider>
       <div className="productdetails">
        <div className="categryhomedi"><Link to="/">Medicine</Link></div>
        <div className="categryhomedi"><Link to="/">Lab Test</Link></div>
        <div className="categryhomedi"><Link to="/">Healthcares</Link></div>
        <div className="categryhomedi"><Link to="/">Fruits & Vegitables</Link></div>
        <div className="categryhomedi"><Link to="/">Cosmatics</Link></div>

        
       </div>
    </>
  );
};

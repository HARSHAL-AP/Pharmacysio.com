import React from "react";
import "./Home.css";
import Slider from "react-slick";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Slider1 } from "../../Components/Homepage/Slider1";
export const Home = () => {
  const settings = {
    dots: false,
 infinite: true,
    speed: 300,
    slidesToShow: 1,
    //autoplay: true,
    slidesToScroll: 1,
 
  };

  return (
    <>
      <Navbar />
   
        <Slider {...settings} className="slid">
        
          <div className="Slide1">
            
          </div>
          <div>
            <h3>FREE SHIPPING on PREPAID Orders</h3>
          </div>
          <div>
            <h3>USE CODE : MASAI10 TO GET 10% OFF</h3>
          </div>
        </Slider>
      
    </>
  );
};

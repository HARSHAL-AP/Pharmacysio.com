import React from "react";
import "./Product.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import Slider from "react-slick";
import { Link,useNavigate } from "react-router-dom";
import psl1 from "../../Images/psl1.jpg";
import psl2 from "../../Images/psl2.jpg";
import psl3 from "../../Images/psl3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Singleitem1 } from "../../Components/Productpage/Singleitem1";
import { Fotter } from "../../Components/Fotter/Fotter";
const covid = [
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/I04110/cofsils-orange-lozenges-strip-of-10-2-1669655050.jpg",
    "title": "Cofsils Orange Lozenges Strip Of 10",
    "saleprice": 28,
    "price": 33,
    "discount": 15,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 3
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-2-1669655043.jpg",
    "title": "Vicks Vaporub 25ml Relief From Cold Coug...",
    "saleprice": 90,
    "price": 90,
    "discount": 0,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 0
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1669655242.jpg",
    "title": "Vicks Vaporub 50ml Relief From Cold Coug...",
    "saleprice": 115,
    "price": 155,
    "discount": 0,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 4
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/282039/cofsils-ginger-lemon-lozenges-strip-of-10-2-1671740849.jpg",
    "title": "Cofsils Ginger Lemon Lozenges Strip Of 10",
    "saleprice": 28,
    "price": 33,
    "discount": 15,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 0
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/G30601/vicks-roll-on-inhaler-2-in-1-relief-for-headache-and-blocked-nose-2-1672394457.jpg",
    "title": "Vicks Roll On Inhaler 2 In 1 Relief For ...",
    "saleprice": 88,
    "price": 89,
    "discount": 1,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 1
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1669635048.jpg",
    "title": "Vicks Vaporub 110ml Relief From Cold Cou...",
    "saleprice": 265,
    "price": 189,
    "discount": 0,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 3
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/100341/himalaya-koflet-h-lozenges-ginger-flavour-6s-2-1671740909.jpg",
    "title": "Himalaya Koflet H Lozenges Ginger Flavour - 6's",
    "saleprice": 35,
    "price": 36,
    "discount": 1,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 0
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/I41299/amrutanjan-relief-nasal-inhaler-075g-2-1669711181.jpg",
    "title": "Amrutanjan Relief Nasal Inhaler - 0.75g",
    "saleprice": 42,
    "price": 45,
    "discount": 5,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 2
  }
];
const dibetic = [
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/I04110/cofsils-orange-lozenges-strip-of-10-2-1669655050.jpg",
    "title": "Cofsils Orange Lozenges Strip Of 10",
    "saleprice": 28,
    "price": 33,
    "discount": 15,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 3
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-2-1669655043.jpg",
    "title": "Vicks Vaporub 25ml Relief From Cold Coug...",
    "saleprice": 90,
    "price": 90,
    "discount": 0,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 0
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1669655242.jpg",
    "title": "Vicks Vaporub 50ml Relief From Cold Coug...",
    "saleprice": 115,
    "price": 155,
    "discount": 0,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 4
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/282039/cofsils-ginger-lemon-lozenges-strip-of-10-2-1671740849.jpg",
    "title": "Cofsils Ginger Lemon Lozenges Strip Of 10",
    "saleprice": 28,
    "price": 33,
    "discount": 15,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 0
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/G30601/vicks-roll-on-inhaler-2-in-1-relief-for-headache-and-blocked-nose-2-1672394457.jpg",
    "title": "Vicks Roll On Inhaler 2 In 1 Relief For ...",
    "saleprice": 88,
    "price": 89,
    "discount": 1,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 1
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1669635048.jpg",
    "title": "Vicks Vaporub 110ml Relief From Cold Cou...",
    "saleprice": 265,
    "price": 189,
    "discount": 0,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 3
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/100341/himalaya-koflet-h-lozenges-ginger-flavour-6s-2-1671740909.jpg",
    "title": "Himalaya Koflet H Lozenges Ginger Flavour - 6's",
    "saleprice": 35,
    "price": 36,
    "discount": 1,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 0
  },
  {
    "image": "https://cdn01.pharmeasy.in/dam/products_otc/I41299/amrutanjan-relief-nasal-inhaler-075g-2-1669711181.jpg",
    "title": "Amrutanjan Relief Nasal Inhaler - 0.75g",
    "saleprice": 42,
    "price": 45,
    "discount": 5,
    "category": "covideesential",
    "subcategory": "coldandcough",
    "rating": 2
  }
];
export const Product = () => {
  const navigate=useNavigate()
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    autoplay:false,
    slidesToScroll: 1,
  };
  const productsetings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Navbar />
      <Slider {...settings} className="pslid">
        <img src={psl1} alt="" className="pSlide1" onClick={()=>navigate("/heathyfood")}/>

        <img src={psl2} alt="" className="pSlide1" onClick={()=>navigate("/healthcare")}/>

        <img src={psl3} alt="" className="pSlide1" onClick={()=>navigate("/ayurvedic")}/>
      </Slider>
      <h1 className="cathead">Shop by category..</h1>
      <div className="allcategorysec">
        <div className="catcontemmain98" onClick={()=>navigate("/covidessential")}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2968/2968941.png"
            alt=""
          />
          <h1>Covid Essentials</h1>
        </div>
        <div className="catcontemmain98" onClick={()=>navigate("/personalcare")}><img
            src="https://cdn-icons-png.flaticon.com/512/4320/4320372.png"
            alt=""
          />
          <h1>Personal Care</h1></div>
        <div className="catcontemmain98" onClick={()=>navigate("/homecare")}><img
            src="https://cdn-icons-png.flaticon.com/512/7572/7572006.png"
            alt=""
          />
          <h1>Home Care</h1></div>
        <div className="catcontemmain98" onClick={()=>navigate("/motherandbaby")}><img
            src="https://cdn-icons-png.flaticon.com/512/6381/6381743.png"
            alt=""
          />
          <h1>Mother & Baby care</h1></div>
        <div className="catcontemmain98" onClick={()=>navigate("/heathyfood")}><img
            src="https://cdn-icons-png.flaticon.com/512/2756/2756708.png"
            alt=""
          />
          <h1>Healty Food & Drinks</h1></div>
        <div className="catcontemmain98" onClick={()=>navigate("/skincare")}><img
            src="https://cdn-icons-png.flaticon.com/512/8166/8166781.png"
            alt=""
          />
          <h1>Skin care</h1></div>
        <div className="catcontemmain98" onClick={()=>navigate("/ayurvedic")}><img
            src="https://cdn-icons-png.flaticon.com/512/6328/6328740.png"
            alt=""
          />
          <h1>Ayurvedics</h1></div>

          <div className="catcontemmain98" onClick={()=>navigate("/sexualwellness")}><img
            src="https://cdn-icons-png.flaticon.com/512/4741/4741200.png"
            alt=""
          />
          <h1>Sexual Wellness</h1></div>
          <div className="catcontemmain98" onClick={()=>navigate("/dibetics")}><img
            src="https://cdn-icons-png.flaticon.com/512/4228/4228683.png"
            alt=""
          />
          <h1>Dibetic Care</h1></div>
      </div>

      <Fotter />
    </>
  );
};

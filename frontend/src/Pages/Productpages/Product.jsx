import React from 'react'
import "./Product.css"
import {Navbar} from "../../Components/Navbar/Navbar"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import psl1 from "../../Images/psl1.jpg"
import psl2 from "../../Images/psl2.jpg"
import psl3 from "../../Images/psl3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Singleitem1 } from '../../Components/Productpage/Singleitem1';
import {Fotter} from "../../Components/Fotter/Fotter";
const covid=[{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/199694/crocin-cold-flu-tab-12s-2-1671740877.jpg",
  "title": "Crocin Cold Flu Tab 12's",
  "saleprice": 60.31,
  "category": "covidessensials",
  "price": 144,
  "discount": 40
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/N65745/beco-natural-floor-liquid-500-ml-baby-pets-safe-2-1644239801.jpg",
  "title": "Beco Natural Floor Liquid 500 Ml- Baby & Pets Safe",
  "saleprice": 86.4,
  "category": "covidessensials",
  "price": 144,
  "discount": 40
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg",
  "title": "Pharmeasy All-in -one Vaporizer",
  "saleprice": 269.55,
  "category": "covidessensials",
  "price": 599,
  "discount": 55
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/F27588/bbb-better-body-bombay-tea-tree-kaffir-lime-cleansing-hand-wash-moisturizing-300ml-2-1672132947.jpg",
  "title": "Bbb Better Body Bombay Tea Tree & Kaffir...",
  "saleprice": 350,
  "category": "covidessensials",
  "price": 500,
  "discount": 40
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/E62677/bbb-better-body-bombay-lavender-chamomile-calming-hand-wash-moisturizing-300ml-2-1672132312.jpg",
  "title": "Bbb Better Body Bombay Lavender & Chamom...",
  "saleprice": 350,
  "category": "covidessensials",
  "price": 600,
  "discount": 40
}]
const skincare=[{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/Y27819/lotus-professional-phyto-rx-whitening-brightening-face-wash-80-gm-2-1671742418.jpg",
  "title": "Lotus Professional Phyto-rx Whitening & ...",
  "saleprice": 400.95,
  "catagory": "skincare",
  "price": 495,
  "discount": 19
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/M92376/lotus-herbals-cocomoist-moisturising-lotion-80-ml-2-1641793386.jpg",
  "title": "Lotus Herbals Cocomoist Moisturising Lotion 80 Ml",
  "saleprice": 255.15,
  "catagory": "skincare",
  "price": 315,
  "discount": 19
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/J22011/everyuth-naturals-body-lotion-rejuvenating-flora-200ml-2-1671742886.jpg",
  "title": "Everyuth Naturals Body Lotion Rejuvenati...",
  "saleprice": 170,
  "catagory": "skincare",
  "price": 250,
  "discount": 32
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/E65375/himalaya-clarina-anti-acne-kit-2-1641789198.jpg",
  "title": "Himalaya Clarina  Anti Acne Kit",
  "saleprice": 79.2,
  "catagory": "skincare",
  "price": 110,
  "discount": 28
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/F96276/lotus-herbals-wg-day-and-night-kit-with-wg-fash-wash-220-gm-2-1641793008.jpg",
  "title": "Lotus Herbals Wg Day And Night Kit With ...",
  "saleprice": 704.7,
  "catagory": "skincare",
  "price": 870,
  "discount": 19
}]
const dibetic=[{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/J04083/praakritik-organic-coconut-sugar-300-g-2-1671745382.jpg",
  "title": "Praakritik Organic Coconut Sugar 300 G",
  "saleprice": 360,
  "category": "dibetic",
  "price": 1140,
  "discount": 57
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/W41443/herbal-hills-diabohills-value-pack-900-tabs-pack-of-2-2-1665636037.jpg",
  "title": "Herbal Hills Diabohills - Value Pack 900...",
  "saleprice": 5092,
  "price": 6700,
  "discount": 24,
  "category": "dibetic"
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/A89701/grazing-meadows-methi-seed-powder-1-kg-pack-of-2-2-1665651931.jpg",
  "title": "Grazing Meadows Methi Seed Powder - 1 Kg...",
  "saleprice": 1520,
  "category": "dibetic",
  "price": 1140,
  "discount": 57
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/D22743/liveasy-essentials-diabetic-orthopedic-brown-slipper-men-size-uk-11-2-1671742365.jpg",
  "title": "Liveasy Essentials Diabetic & Orthopedic...",
  "saleprice": 519.48,
  "price": 999,
  "discount": 48,
  "category": "dibetic"
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/H17123/pharmeasy-diabetic-orthopedic-women-slippers-fahion-range-1-black-color-size-8-2-1671743079.jpg",
  "title": "Pharmeasy Diabetic & Orthopedic Women Sl...",
  "saleprice": 604.45,
  "price": 1099,
  "discount": 45,
  "category": "dibetic"
}]
const data=[ {
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/U88823/true-elements-instant-oats-900gm-2-1672734947.jpg",
  "tittle": "True Elements Instant Oats 900gm",
  "saleprice": 185.25,
  "price": 195,
  "discount": 5,
  "category": "healtyfood"
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/Y04048/true-elements-fruits-and-nuts-muesli-1200gm-2-1672734453.jpg",
  "tittle": "True Elements Fruits And Nuts Muesli 1200gm",
  "saleprice": 640.8,
  "price": 720,
  "discount": 11,
  "category": "healtyfood"
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/Z38551/bodyfirst-peanut-butter-chocolate-crunchy-510-grm-6.4-1674109190.jpg",
  "tittle": "Bodyfirst Peanut Butter Chocolate Crunchy 510 Grm",
  "saleprice": 319.2,
  "price": 399,
  "discount": 20,
  "category": "healtyfood"
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/G67281/grazing-meadows-trimovedic-60-tablets-ayurvedic-herbal-supplement-for-weight-management-pack-of-5-2-1671744317.jpg",
  "tittle": "Grazing Meadows Trimovedic 60 Tablets - ...",
  "saleprice": 2655,
  "price": 2950,
  "discount": 10,
  "category": "healtyfood"
},
{
  "image": "https://cdn01.pharmeasy.in/dam/products_otc/W20442/grazing-meadows-trimovedic-900-tablets-natural-supplement-for-weight-management-pack-of-4-2-1671743467.jpg",
  "tittle": "Grazing Meadows Trimovedic 900 Tablets |...",
  "saleprice": 26092.8,
  "price": 28992,
  "discount": 10,
  "category": "healtyfood"
}]
export const Product = () => {

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
    <Navbar/>
    <Slider {...settings} className="pslid">
        <img src={psl1} alt="" className="pSlide1" />

        <img src={psl2} alt="" className="pSlide1" />

        <img src={psl3} alt="" className="pSlide1" />
      </Slider>
     <div className='pbody'>
       <div className='pbheading'>
           <h1 className='pbh1head'>Deals of the Day <a>12:59 MINS LEFT HURRY!</a></h1><p className='pbhpp'>View All</p>
       </div>
       <div className='pbcontener'>
           {
            data.map((el,index)=>{
              return <Singleitem1 key={index} obj={el}/>  

            })

           }
       </div>
     </div>
     <div className='pbody'>
       <div className='pbheading'>
           <h1 className='pbh1head'>COVID Essentials </h1><p className='pbhpp'>View All</p>
       </div>
       <div className='pbcontener'>
           {
            covid.map((el,index)=>{
              return <Singleitem1 key={index} obj={el}/>  

            })

           }
       </div>
     </div>
     <div className='pbody'>
       <div className='pbheading'>
           <h1 className='pbh1head'>Ayurvedic </h1><p className='pbhpp'>View All</p>
       </div>
       <div className='pbcontener'>
           {
            dibetic.map((el,index)=>{
              return <Singleitem1 key={index} obj={el}/>  

            })

           }
       </div>
     </div>
     <div className='pbody'>
       <div className='pbheading'>
           <h1 className='pbh1head'>Mom & Baby care </h1><p className='pbhpp'>View All</p>
       </div>
       <div className='pbcontener'>
           {
            data.map((el,index)=>{
              return <Singleitem1 key={index} obj={el}/>  

            })

           }
       </div>
     </div>
     <div className='pbody'>
       <div className='pbheading'>
           <h1 className='pbh1head'>Personal Care</h1><p className='pbhpp'>View All</p>
       </div>
       <div className='pbcontener'>
           {
            data.map((el,index)=>{
              return <Singleitem1 key={index} obj={el}/>  

            })

           }
       </div>
     </div>
     <Fotter/>
    </>
  )
}

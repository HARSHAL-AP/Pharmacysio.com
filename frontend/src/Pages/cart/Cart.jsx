import React,{useState,useEffect}from "react";
import "./Cart.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Fotter } from "../../Components/Fotter/Fotter";
import { Singlitem } from "./Singlecartitem";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  const [value, setValue] = useState("");

    const navigate=useNavigate()
  const [subtotal, setSubtotal] = useState(0);
  const data = [
    {
      _id: "63df416644562bc2ceeb31d2",
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/I04110/cofsils-orange-lozenges-strip-of-10-2-1669655050.jpg",
      title: "Cofsils Orange Lozenges Strip Of 10",
      saleprice: 28,
      price: 33,
      discount: 15,
      category: "covideesential",
      subcategory: "coldandcough",
      rating: 3,
    },
    {
      _id: "63df416644562bc2ceeb31d3",
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-2-1669655043.jpg",
      title: "Vicks Vaporub 25ml Relief From Cold Coug...",
      saleprice: 90,
      price: 90,
      discount: 0,
      category: "covideesential",
      subcategory: "coldandcough",
      rating: 0,
    },
  ];

  let total = 0;
 data.forEach((ele) => {

    total += (ele.price*1) ;
  
});

  return (
    <>
      <Navbar />
      <div className="Cartbody">
        <div className="carthead">
          <h1>My Cart({data.length} items)</h1>
          <h1>Total Payable : ₹ {total}</h1>
        </div>
        <div className="listheading">
          <div className="subhead">
            <h1>Item Details</h1>
            <h1>Quantity</h1>
          </div>
          <div className="subhead">
            <h1>Delivery</h1>
            <h1>Price</h1>
          </div>
        </div>

        <div className="allcartprod">
          {data.length > 0 &&
            data.map((item) => {
              return <Singlitem key={item.id} el={item} />;
            })}
        </div>
        <div className="nfjhfhthckdkkjd4">
          <div className="addressbody87">
            <h1 className="Addheadingcalss34">Dellivery To:</h1>
            <p className="adresdescripton47">No Adress Added yet...</p>
          </div>
          <div className="payssbody87">
            <h1 className="Addheadingcalss34">PRICE DETAILS</h1>
            <div className="finalpric546">
              <h1>Price</h1>
              <h1>₹{total}</h1>
            </div>
            <div className="finalpric546_2">
              <h1>SubTotal</h1>
              <h1>₹{total}</h1>
            </div>
            <div className="palceorderbtn87" onClick={() => navigate("/")}>
              Place Order
            </div>
          </div>
        </div>
      </div>

      <Fotter />
    </>
  );
};

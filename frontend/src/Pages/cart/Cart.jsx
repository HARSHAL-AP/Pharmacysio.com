import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Fotter } from "../../Components/Fotter/Fotter";
import { Singlitem } from "./Singlecartitem";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

export const Cart = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const data = useSelector((store) => store.Authreducer.cart_item);

  useEffect(() => {
    if(data.length===0){
 document.getElementById("emptycart").style.display="block"
 document.getElementById("cartbody").style.display="none"
    }
    else{
      document.getElementById("emptycart").style.display="none"
      document.getElementById("cartbody").style.display="block"
      let t = 0;
    for (let i = 0; i < data.length; i++) {
      t += data[i].price;
    }
    setSubtotal(t);
    }
    
  }, [data.length]);

  return (
    <>
      <Navbar />
      <div className="emptycart" id="emptycart">
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/792/420/non_2x/add-to-cart-start-shopping-now-button-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          alt=""
        />
        <h1>Look Like You have not added anything to your cart. Go ahead and Explore top Categories !</h1>
        <Button bg="green" mt={3} color="white" onClick={()=>navigate("/product")}>GO</Button>
      </div>
      <div className="Cartbody" id="cartbody">
        <div className="carthead">
          <h1>My Cart({data.length} items)</h1>
          <h1>Total Payable : ₹ {subtotal}</h1>
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
            data.map((item, index) => {
              return <Singlitem key={index} el={item} />;
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
              <h1>₹{subtotal}</h1>
            </div>
            <div className="finalpric546_2">
              <h1>SubTotal</h1>
              <h1>₹{subtotal}</h1>
            </div>
            <div
              className="palceorderbtn87"
              onClick={() => navigate("/payment")}
            >
              Place Order
            </div>
          </div>
        </div>
      </div>

      <Fotter />
    </>
  );
};

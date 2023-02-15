import React,{useState,useEffect}from "react";
import "./Singlecartite.css"
import {deletocart} from "../../Redux/authreducer/action"
import { useDispatch, useSelector } from "react-redux";


export const Singlitem = ({ el }) => {
  const dispatch=useDispatch()
    const [count, setCount] = useState(1);
    const [price,setPrice]=useState(el.price)
    const Handleremove = () => {
      console.log(el)
      dispatch(deletocart(el._id))
      };

      const handleupdate = () => {
      console.log("Update")
      };
    return (
      <>
        <div className="itembody">
          <div className="imgbody">
            <img src={el.image} alt="" className="itemimg" />
            <div className="titalbody">
              <h1 className="tital2344">{el.title}</h1>
              <p className="removebtn" onClick={Handleremove}>
                Remove
              </p>
            </div>
            <div className="qtybody">
              
              <h1>{count}</h1>
              
            </div>
          </div>
          <div className="pricebody">
            <div className="deliverybody123">
              <h2>Estimated delivery time 15 Feb 2023 </h2>
              <h2>07:24 PM</h2>
            </div>
            <div className="privhds3">
              <h1>₹ {el.price * count}</h1>
            </div>
          </div>
        </div>
        {/*    This is for the Responsive components..... /*/}
        <div className="resbody">
          <div className="resimggbody2376">
            <img src={el.image} alt="" className="resimg7654" />
            <div className="restitlbody8765">
              <h1 className="resmainheadingtitla324">{el.title}</h1>
              <h6 className="deliverydeatales2154">
              Estimated delivery time 15 Feb 2023{" "}
              </h6>
              <h6 className="deliverydeatales2154">07:24 PM</h6>
              <p className="removebtn" onClick={Handleremove}>
                Remove
              </p>
            </div>
          </div>
  
          <div className="esqtybody4345">
            <div className="ressqtyadjuster">
            
              <h1>{count}</h1>
             
            </div>
            <div className="respricebiody546978945">
              <h1 className="resprice53647">₹ {el.price * count}</h1>
            </div>
          </div>
        </div>
      </>
    );
  };
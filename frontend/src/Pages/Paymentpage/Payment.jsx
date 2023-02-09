import React, { useState, useEffect } from "react";
import "./Payment.css";
import { BsCreditCardFill } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useToast,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Navbar} from "../../Components/Navbar/Navbar"
import {Fotter} from "../../Components/Fotter/Fotter"

const Payment = () => {
  const [poup, Setpopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [value, setValue] = useState("");

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
    total += ele.price * ele.qty;
  });

  useEffect(() => {
    if (data.length === 0) {
      //dispatch(getdata());
    }
  }, [dispatch, data.length]);

  const Toglepoup = () => {
    Setpopup(!poup);
  };

  const FinalALert = () => {
    alert("Order Sucsessfull....");
    // toast({
    //   title: "Order placed successfully",
    //   status: "success",
    //   isClosable: true,
    //   duration: 5000,
    //   position: top,
    // });
    navigate("/");
  };
  return (
    <>
    <Navbar/>
    <div className="chceckout_body">
      <div className="adresscontaner">
        <p className="stpetseterdjfgu">Step 1</p>
        <h1 className="contenerheading234">Shiping Details</h1>

        <p className="Shipto2586">Ship To</p>
        <button onClick={Toglepoup} className="adresschangerbtn">
          Change Address
        </button>
        <div className={poup ? "modal" : "closedmodal"}>
          <div className="modalcontent">
            <div onClick={Toglepoup} className="closebtn123">
              Close
            </div>
            <h1 className="addheadingmodal">Add New Address</h1>
            <div className="modalinputcontainer2">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="modalinputcontainer2">
              <input type="text" placeholder="Mobail No " />
              <input type="text" placeholder="Email" />
            </div>
            <div className="modalinputcontainer2">
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="Pincode" />
            </div>
            <div className="modalinputcontainer2">
              <input type="text" placeholder="City/District/Town" />
              <input type="text" placeholder="State" />
            </div>
            <textarea
              placeholder="Adress"
              cols="75"
              rows="4"
              className="sdrtshfsh"
            ></textarea>
            <div className="addsavignbtn ">SAVE ADDRESS</div>
          </div>
        </div>
      </div>
      <div className="paymentcontaner">
        <p className="stpetseterdjfgu">Step 1</p>
        <h1 className="contenerheading234">
          Payment
          <span className="totalpriceinfo3098">| You Pay :₹ {total}</span>
        </h1>
        <h2 className="payopheadi34">Payment Option</h2>
        <Accordion>
          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Debit Card</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <p className="formlabel">Card Number</p>
              <input placeholder="Card Number" className="paymentforminput3" />
              <p className="formlabel">Name On Card</p>
              <input placeholder="Name on card" className="paymentforminput3" />
              <p className="formlabel">Expiry Date</p>
              <div className="cardexpiredetailss">
                <input type="text" placeholder="Month" />
                <input type="text" placeholder="Year" />
                <input type="text" placeholder="CVV" />
              </div>
              <div className="paymentsubmitbtn979" onClick={FinalALert}>
                PAY SECURELY ₹{total}
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Credit Card</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <p className="formlabel">Card Number</p>
              <input placeholder="Card Number" className="paymentforminput3" />
              <p className="formlabel">Name On Card</p>
              <input placeholder="Name on card" className="paymentforminput3" />
              <p className="formlabel">Expiry Date</p>
              <div className="cardexpiredetailss">
                <input type="text" placeholder="Month" />
                <input type="text" placeholder="Year" />
                <input type="text" placeholder="CVV" />
              </div>
              <div className="paymentsubmitbtn979" onClick={FinalALert}>
                PAY SECURELY ₹{total}
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Net Banking</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <p>
                We will redirect to your bank website to authorize the payment.
                Your order will get confirmed post paymen
              </p>
              <select
                placeholder="Select Your bank"
                className="paymentselecttag234"
              >
                <option value="">Select Your bank</option>
                <option value="SBI">State bank of India</option>
                <option value="SBI">Central bank of India</option>

                <option value="SBI">Bank of Badoda</option>
                <option value="SBI">ICICI</option>
                <option value="SBI">Bank of Maharashtra</option>
                <option value="SBI">Kotak Mahindra</option>
                <option value="SBI">AXIS Bank</option>
              </select>
              <div className="paymentsubmitbtn979" onClick={FinalALert}>
                PAY SECURELY ₹{total}
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>UPI</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <p className="formlabel">Enter UPI ID</p>
              <input placeholder="yourname@upi" className="paymentforminput3" />
              <div className="paymentsubmitbtn979" onClick={FinalALert}>
                PAY SECURELY ₹{total}
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Wallet</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <p>Select Your Wallet</p>
              <select
                placeholder="Select Your bank"
                className="paymentselecttag234"
              >
                <option value="">Select Your Wallet</option>
                <option value="SBI">Airtel Payment Bank</option>
                <option value="SBI">Amazon Pay</option>

                <option value="SBI">Phone Pay</option>
                <option value="SBI">ICICI</option>
                <option value="SBI">Google Pay</option>
                <option value="SBI">Paytm</option>
                <option value="SBI">Freecharge</option>
              </select>
              <div className="paymentsubmitbtn979" onClick={FinalALert}>
                PAY SECURELY ₹{total}
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Cash On Dilivery</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <div>
                <p>Please pay a total amount of ₹ {total} upon delivery</p>
              </div>
              <div className="paymentsubmitbtn979" onClick={FinalALert}>
                PLACE ORDER
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="cartitemcontaner">
        <p className="stpetseterdjfgu">Order Details</p>
        <div className="allorderDetails">
          
        </div>
        <div className="filkop098">
          <h1>Price</h1>
          <p>{total}</p>
        </div>
        <div className="filkop098">
          <h1>Shiping</h1>
          <p>Free*</p>
        </div>
        <div className="finalpoiunhy">
          <h1 className="he764">Total Payable</h1>
          <p>{total}</p>
        </div>
      </div>
    </div>
    <Fotter/>
    </>
  );
};

export default Payment;
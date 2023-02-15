import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Fotter } from "../../Components/Fotter/Fotter";
import "./Acount.css";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Input, FormLabel,Select,Button } from "@chakra-ui/react";
import { logOut } from "../../Redux/authreducer/action";
import { Navigate, useNavigate } from "react-router-dom";

export const Acount = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.Authreducer.userdata);
  console.log(user);
  const inputStyle={
    size:"sm",
    
     errorBorderColor:'crimson',
     focusBorderColor:'#38B2AC',
  }
  const Handellogout=()=>{
dispatch(logOut())
navigate("/")
  }
  return (
    <>
      <Navbar />
      <div className="usercard">
        <div className="useracinfo">
          <div className="useimg">
            <AiOutlineUser className="usericoon" />
          </div>
          <div className="usbasicinfo">
            <h1>{user.first_name}</h1>
            <h4>+91-{user.phone_number}</h4>
            <h4>apsundeharshal129@gmail.com</h4>
          </div>
        </div>
        <div className="useinfoupdate">
          <p>Upadate your Inforfation </p>
          <div className="inc">
            <div className="inc1">
              <FormLabel fontSize="sm" mt="2">
                First name
              </FormLabel>
              <Input placeholder="First name" {...inputStyle}/>
              <FormLabel fontSize="sm" mt="2">
                Phone Number
              </FormLabel>
              <Input placeholder="Phone Number" size="sm" />
              <FormLabel fontSize="sm" mt="2">
                BirthDate
              </FormLabel>
              <Input {...inputStyle} type="datetime-local" />
              <FormLabel fontSize="sm" mt="2">
                Address 
              </FormLabel>
              <Input placeholder="address" {...inputStyle} />
              <FormLabel fontSize="sm" mt="2">
               State
              </FormLabel>
              <Input placeholder="state" {...inputStyle} />
              <FormLabel fontSize="sm" mt="2">
               Zipcode
              </FormLabel>
              <Input placeholder="zipcode" {...inputStyle} />
            </div>
            <div className="inc2">
              <FormLabel fontSize="sm" mt="2">
                Last name
              </FormLabel>
              <Input placeholder="First name" {...inputStyle} />
              <FormLabel fontSize="sm" mt="2">
                Email
              </FormLabel>
              <Input placeholder="Email" {...inputStyle} type="Email" />
              <FormLabel fontSize="sm" mt="2">
                Gender
              </FormLabel>
              <Select placeholder="Select option" {...inputStyle}>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option3">Other</option>
              </Select>
              <FormLabel fontSize="sm" mt="2">
                City
              </FormLabel>
              <Input placeholder="city" {...inputStyle}/>
              <FormLabel fontSize="sm" mt="2">
                Country
              </FormLabel>
              <Input placeholder="country" {...inputStyle} />
            </div>
          </div>
          
        </div>
        <div className="lgoutbtn">
            <Button bg="red" color="white" onClick={Handellogout}>LogOut</Button>
          </div>
      </div>

      <Fotter />
    </>
  );
};

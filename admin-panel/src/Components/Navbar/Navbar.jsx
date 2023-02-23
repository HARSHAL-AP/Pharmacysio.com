import React,{useEffect,useState} from "react";
import "./Navbar.css";
import mlogo from "../../Images/mlogo.png";
import { Sidebar } from "../Sidebar/Sidebar";
import {Link} from "react-router-dom"
import {RxDashboard} from "react-icons/rx"
import {GiMedicines} from "react-icons/gi"
import {MdOutlineCreateNewFolder,MdOutlineAddShoppingCart} from "react-icons/md"
import {BsFillPatchQuestionFill,BsChevronDown} from "react-icons/bs"
import {FaUsersCog,FaBars} from "react-icons/fa"
import {GrUserAdmin} from "react-icons/gr"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";

export const Navbar = () => {
  const [mobail,setmobail]=useState(false)
  return (
    <>
      <div className="Navbar">
        <div className="logobody">
          <img src={mlogo} alt="" />
        </div>
        <div className={mobail?"mobailnavlink":"AllSUblinks"}>
        <Link to="/" className="allnavlink"><RxDashboard/><p>Dashboard</p> </Link>
        <Link to="/allproduct" className="allnavlink"><GiMedicines/><p> Allproduct</p></Link>
        <Link  to="/addproduct" className="allnavlink"><MdOutlineCreateNewFolder/><p>Addproduct</p> </Link>
        <Link  to="/order" className="allnavlink"><MdOutlineAddShoppingCart/><p>Order</p> </Link>
        <Link  to="/" className="allnavlink"><BsFillPatchQuestionFill/><p>F&Qs</p> </Link>
        <Link  to="/admininfo" className="allnavlink"><FaUsersCog/><p>Users</p> </Link>
       
        </div>
        <p className="opupbtn" onClick={()=>setmobail(!mobail)}><FaBars/></p>
        <div className="acpopo">
          <Popover>
            <PopoverTrigger>
              <h1 className="acbutonp">Acount<BsChevronDown/></h1>
            </PopoverTrigger>
            <PopoverContent w="170px">
           
              <PopoverCloseButton />
              <PopoverHeader>Manage Acount </PopoverHeader>
              <PopoverBody>
               <p>Profile</p>
               <p>Logout</p>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLabtests,
  getallFarmerpro,
  getProductorders,
  getLabtestorders,
  getallusers,
  getallAdmins,
  getallpord,
  getallMedicindata,
} from "../../redux/rpoductreducer/action";
export const Dashboard = () => {
  const dispatch = useDispatch();
const navigate=useNavigate()
  const labtests = useSelector((store) => store.Productreducer.labtest);
  const farmerp = useSelector((store) => store.Productreducer.farmerp);
  const products = useSelector((store) => store.Productreducer.products);
  const medicine = useSelector((store) => store.Productreducer.medicine);
  const users = useSelector((store) => store.Productreducer.users);
  const admins = useSelector((store) => store.Productreducer.admins);
  const Productorders = useSelector(
    (store) => store.Productreducer.Productorders
  );
  const labtestorde = useSelector((store) => store.Productreducer.labtestorders);
  useEffect(() => {
    if (labtests.length === 0) {
      dispatch(getLabtests());
    }
    if (farmerp.length === 0) {
      dispatch(getallFarmerpro());
    }
    if (medicine.length === 0) {
      dispatch(getallMedicindata());
    }
    if (products.length === 0) {
      dispatch(getallpord());
    }
    if (users.length === 0) {
      dispatch(getallusers());
    }
    if (admins.length === 0) {
      dispatch(getallAdmins());
    }
    if (Productorders.length === 0) {
      dispatch(getProductorders());
    }
    if (labtestorde.length === 0) {
      dispatch(getLabtestorders());
    }
  }, [
    labtests.length,
    farmerp.length,
    products.length,
    medicine.length,
    users.length,
    admins.length,Productorders.length,labtestorde.length
  ]);

  return (
    <>
      <Navbar />
      <div className="pageinfo">
        <h1> Dashboard</h1>
      </div>

      <div className="dashbody">
        <h1 className="dashheadings">Checkouts</h1>
        <div className="everydata">
          <div>
            <h1>Medicins </h1> <h1>{0}</h1>
            <Button m={2} bg="green.300">Take Action </Button>
          </div>
          <div>
            <h1>Preiscriptions</h1> <h1>{0}</h1>
            <Button m={2} bg="green.300">Take Action </Button>
          </div>
          <div>
            <h1>Helthcare Products</h1> <h1>{Productorders.length}</h1>
            <Button m={2} bg="green.300">Take Action </Button>
          </div>
          <div>
            <h1>Lab tests</h1> <h1>{labtestorde.length}</h1>
            <Button m={2} bg="green.300">Take Action </Button>
          </div>
          <div>
            <h1>Farmer Products</h1> <h1>{0}</h1>
            <Button m={2} bg="green.300">Take Action </Button>
          </div>
        </div>
        <h1 className="dashheadings">All Products data</h1>
        <div className="everydata">
          <div>
            <h1>Medicins </h1> <h1>{medicine.length}</h1>{" "}
            <Button m={2} bg="blue.300" onClick={()=>navigate("/medicine")}>Veiw </Button>
            <Button m={2} bg="pink.300">Add </Button>
          </div>

          <div>
            <h1>Helthcare Products</h1>
            <h1>{products.length}</h1>
            <Button m={2} bg="blue.300" onClick={()=>navigate("/allproduct")}>Veiw </Button>
            <Button m={2} bg="pink.300">Add </Button>
          </div>
          <div>
            <h1>Lab tests</h1>
            <h1>{labtests.length}</h1>
            <Button m={2} bg="blue.300" onClick={()=>navigate("/labtest")}>Veiw </Button>
            <Button m={2} bg="pink.300">Add </Button>
          </div>
          <div>
            <h1>Farmer Products</h1>
            <h1>{farmerp.length}</h1>
            <Button m={2} bg="blue.300">Veiw </Button>
            <Button m={2} bg="pink.300">Add</Button>
          </div>
        </div>
        <h1 className="dashheadings">Total Users</h1>
        <div className="everydata">
          <div>
            <h1>Users </h1>
            <h1>{users.length}</h1>
            <Button m={2} bg="blue.300" onClick={()=>navigate("/users")}>Veiw </Button>
          </div>

          <div>
            <h1>Admins </h1> 
            <h1>{1}</h1>
            <Button m={2} bg="blue.300">Veiw </Button>
            <Button m={2} bg="pink.300">Add </Button>
          </div>
        </div>
      </div>
    </>
  );
};

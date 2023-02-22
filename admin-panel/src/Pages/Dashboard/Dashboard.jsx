import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Dashboard.css";
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
export const Dashboard = () => {
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
            <h1>Medicins </h1> <Button>Take Action </Button>
          </div>
          <div>
            <h1>Preiscriptions</h1> <Button>Take Action </Button>
          </div>
          <div>
            <h1>Helthcare Products</h1> <Button>Take Action </Button>
          </div>
          <div>
            <h1>Lab tests</h1> <Button>Take Action </Button>
          </div>
          <div>
            <h1>Farmer Products</h1> <Button>Take Action </Button>
          </div>
        </div>
        <h1 className="dashheadings">All Products data</h1>
        <div className="everydata">
          <div> 
            <h1>Medicins </h1> <Button>Veiw </Button>
            <Button>Add </Button>
          </div>

          <div>
            <h1>Helthcare Products</h1>
            <Button>Veiw </Button>
            <Button>Add </Button>
          </div>
          <div>
            <h1>Lab tests</h1>
            <Button>Veiw </Button>
            <Button>Add </Button>
          </div>
          <div>
            <h1>Farmer Products</h1> <Button>Veiw </Button>
            <Button>Add</Button>
          </div>
        </div>
        <h1 className="dashheadings">Total Users</h1>
        <div className="everydata">
          <div>
            <h1>Users </h1> <Button>Veiw </Button>
            <Button>Add </Button>
          </div>

          <div>
            <h1>Admins </h1> <Button>Veiw </Button>
            <Button>Add </Button>
          </div>

        </div>
      </div>
    </>
  );
};

import React from 'react'
import {Navbar} from "../../Components/Navbar/Navbar"
import "./Dashboard.css"
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'
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
    <Navbar/>
    <div className='admincard'>
      <div>
      <h1>Congratulations harshal! 🎉</h1>
      <p>You have done 72% more sales today. 
      
       </p>
       <button>View Orders</button>
      </div>
     
    <img src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/illustrations/man-with-laptop-light.png" alt="" />
    </div>

    <div className='profitsale'>
    
  <Stat>
    <StatLabel>Profit</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Sales</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
  <Stat>
    <StatLabel>Payments</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Tranactions</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
    </div>

    <div className='allproducts'>
     all Products
  

    </div>
    </>
    
  )
}

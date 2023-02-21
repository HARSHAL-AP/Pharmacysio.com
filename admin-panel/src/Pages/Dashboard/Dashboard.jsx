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
     <div className='pageinfo'>
         <h1> Dashboard</h1>
     </div>

     <div className='dashbody'>
       

      
     </div>
    </>
    
  )
}

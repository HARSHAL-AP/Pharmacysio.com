import React, { useState, useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";

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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  
    getallusers 
 
} from "../../redux/rpoductreducer/action";
export const User = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((store) => store.Productreducer.users);
useEffect(()=>{
dispatch(getallusers())
},[])

  

  return (
    <>
      <Navbar />
      <div className="pageinfo">
        <h1> All Users({users.length})</h1>
      </div>
      <div className="dashbody">
        <Table variant="striped" colorScheme="teal" overflow="scrol">
          <Thead>
            <Tr>
              <Th>No</Th>

              <Th>User name</Th>

              <Th>Email</Th>
              <Th>Phone No </Th>
              <Th>Total Orders</Th>
             
            </Tr>
          </Thead>
          <Tbody>
            {users.map((el, index) => {
              return (
                <Tr key={el.id}>
                  <Td>{index + 1}</Td>

                  <Td>{el.first_name}</Td>

                  <Td>{el.email}</Td>
                  <Td>{el.phone_number} </Td>
                  <Td>
                    {el.orders.length}
                    <Modal
                      initialFocusRef={initialRef}
                      finalFocusRef={finalRef}
                      isOpen={isOpen}
                      onClose={onClose}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                          <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder="First name" />
                          </FormControl>

                          <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder="Last name" />
                          </FormControl>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme="blue" mr={3}>
                            Save
                          </Button>
                          <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Td>
                  <Td>{el.status ? "Completed" : "Pending"}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

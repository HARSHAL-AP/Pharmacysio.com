import React, { useState, useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
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
    ModalCloseButton,FormControl,FormLabel,Input
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import { useDispatch, useSelector } from "react-redux";
  import {
    getProductorders,
    getLabtestorders,
  } from "../../redux/rpoductreducer/action";
import { Alphabets } from "../../Components/Medicin/Alphabets";
import { Pagination } from "../../Components/Pagination/Pagination";
export const Medicine = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const dispatch = useDispatch();
    const medicine = useSelector((store) => store.Productreducer.medicine);
    return (
      <>
        <Navbar />
        <div className="pageinfo">
          <h1>All Drugs</h1>
          
        </div>
        <Alphabets/>
        <div className="dashbody">
          <Table variant="striped" colorScheme="teal" overflow="scrol">
            <Thead>
              <Tr>
                <Th>No</Th>
  
                <Th>Drug Name</Th>
  
                <Th>Pack Info</Th>
                <Th>company </Th>
                <Th>Prsctiontion require</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {medicine.map((el, index) => {
                return (
                  <Tr key={el.id}>
                    <Td>{index + 1}</Td>
  
                    <Td>{el.drug_name}</Td>
  
                    <Td>{el.pack_info}</Td>
                    <Td>
                      {el.company} 
                    </Td>
                    <Td>
                      {el.prescription_required?"Yes":"No"}
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
                    <Td>
                      {el.price}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </div>
        <Pagination/>
      </>
    );
}

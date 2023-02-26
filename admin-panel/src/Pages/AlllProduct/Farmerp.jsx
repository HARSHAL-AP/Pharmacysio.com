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
  
export const Farmerp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const dispatch = useDispatch();
    const Productorders = useSelector(
      (store) => store.Productreducer.Productorders
    );
    const labtestorde = useSelector(
      (store) => store.Productreducer.labtestorders
    );
  
    useEffect(() => {
      if (Productorders.length === 0) {
        dispatch(getProductorders());
      }
      if (labtestorde.length === 0) {
        dispatch(getLabtestorders());
      }
    }, [Productorders.length, labtestorde.length]);
  return (
    <>
      <Navbar />
      <div className="pageinfo">
        <h1> Orders</h1>
      </div>
      <div className="dashbody">
        <Table variant="striped" colorScheme="teal" overflow="scrol">
          <Thead>
            <Tr>
              <Th>No</Th>

              <Th>Order No</Th>

              <Th>Total Items</Th>
              <Th>Total amount </Th>
              <Th>Payment Method</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Productorders.map((el, index) => {
              return (
                <Tr key={el.id}>
                  <Td>{index + 1}</Td>

                  <Td>{el.order_number}</Td>

                  <Td>{el.items.length}</Td>
                  <Td>
                    {el.total_amount} ₹
                  </Td>
                  <Td>
                    {el.payment_method}
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
                    {el.status?"Completed":"Pending"}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  )
}

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
    getLabtests
  } from "../../redux/rpoductreducer/action";


export const Labtests = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const dispatch = useDispatch();
    const labtests = useSelector((store) => store.Productreducer.labtest);
  
    useEffect(() => {
        if (labtests.length === 0) {
            dispatch(getLabtests());
          }
    }, [labtests.length,]);
    return (
      <>
        <Navbar />
        <div className="pageinfo">
          <h1> Lab tests</h1>
        </div>
        <div className="dashbody">
          <Table variant="striped" colorScheme="teal" overflow="scrol">
            <Thead>
              <Tr>
                <Th>No</Th>
  
                <Th>Test Name</Th>
  
                <Th>Price</Th>
                <Th>Edit </Th>
                <Th>Delet</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              {labtests.map((el, index) => {
                return (
                  <Tr key={el.id}>
                    <Td>{index + 1}</Td>
  
                    <Td>{el.title}</Td>
  
                    <Td>{el.price}</Td>
                   
                    <Td>
                      <Button>Edit</Button>
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
                     <Button>Delet</Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </div>
      </>
    );
}

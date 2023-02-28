import React, { useState, useEffect } from "react";
import "./Singleitem1.css"
import { useNavigate } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useSelector } from "react-redux";
import Loder from "../../Images/Loder.gif"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,Text,Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
export const Singleitem1 = ({obj}) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const data=useSelector((store)=>store.Productreducer.isLoading)
  const [Count,setCount]=useState(1)
   const Handljump=(id)=>{
    navigate(`/Singleproduct/${id}`)
   }
   if(data){
    return (
      <div className="cardbody"><img src={Loder} alt="" className="loder"/></div>
    )
   }
  else{
    return (
      <>
       
        <div className="cardbody" onClick={onOpen}>
         
          <div className="imgb">
            <img src={obj.image} alt="" />
          </div>
          <div className="datab">
            <h1 className="cardheading">{obj.title}</h1>
            <p className="prequire"><AiOutlineFileAdd className="cardconi"/>{obj.prescription_required?"Prescription Required":"Prescription Not Required"}</p>
            
            <div className="pricecard">
              <p>MRP ₹{obj.price}</p> 
            </div>
            
          </div>
        </div>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          
          
          <ModalBody>
          <div className="cardbody" onClick={onOpen}>
         
         <div className="imgb">
           <img src={obj.image} alt="" />
         </div>
         <div className="datab">
           <h1 className="cardheading">{obj.title}</h1>
           <p className="prequire"><AiOutlineFileAdd className="cardconi"/>{obj.prescription_required?"Prescription Required":"Prescription Not Required"}</p>
           
           <div className="pricecard">
             <p>MRP ₹{obj.price}</p> 
           </div>
           <div className="qtyadjuster">
         <button onClick={()=>setCount(Count-1)} disabled={Count == 1 ? true : false}>-</button>
          
          <p>{Count}</p>
          <button onClick={()=>setCount(Count+1)}>+</button>
         </div>
         </div>
       </div>
          </ModalBody>

          <ModalFooter m="auto" alignItems="center" justifyContent="space-between" w="400px">
         
            <Button colorScheme='green' mr={3} onClick={onClose}>
              Add To Cart
            </Button>
            
          </ModalFooter>
          
        </ModalContent>
      </Modal>
      </>
    );
  }
}

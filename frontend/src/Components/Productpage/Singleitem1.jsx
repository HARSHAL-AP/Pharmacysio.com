import React, { useState, useEffect } from "react";
import "./Singleitem1.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useSelector } from "react-redux";
import Loder from "../../Images/Loder.gif";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { addtocart } from "../../Redux/authreducer/action";
import { useDisclosure } from "@chakra-ui/react";
export const Singleitem1 = ({ obj }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const data=useSelector((store)=>store.Productreducer.isLoading)
  const cartdata=useSelector((store)=>store.Productreducer.cart_item)
  const [Count,setCount]=useState(1)
   const Handljump=(id)=>{
    navigate(`/Singleproduct/${id}`)
   }
   if(data){

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const data = useSelector((store) => store.Productreducer.isLoading);
  const [Count, setCount] = useState(1);
  const toast = useToast();
  const Handljump = (id) => {
    navigate(`/Singleproduct/${id}`);
  };
  const Handleadd = () => {
    //let item = { ...obj, quantity: Count };
    //console.log(item);
    //dispatch(addtocart(item));
    //onClose();
    //toast({
    //  title: `Item Added To cart...`,
    //  status: "success",
    //  isClosable: true,
    //});
  };
  if (data) {

    return (
      <div className="cardbody">
        <img src={Loder} alt="" className="loder" />
      </div>
    );
  } else {
    return (
      <>
        <div className="cardbody" onClick={onOpen}>
          <div className="imgb">
            <img src={obj.image} alt="" />
          </div>
          <div className="datab">
            <h1 className="cardheading">{obj.title}</h1>
            <p className="prequire">
              <AiOutlineFileAdd className="cardconi" />
              {obj.prescription_required
                ? "Prescription Required"
                : "Prescription Not Required"}
            </p>

            <div className="pricecard">
              <p>MRP ₹{obj.price}</p>
            </div>
          </div>
        </div>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          
          <ModalContent>
            
            <ModalBody p={5}>
              
              <div className="cardbody" onClick={onOpen}>
                <div className="imgb">
                  <img src={obj.image} alt="" />
                </div>
                <div className="datab">
                  <h1 className="cardheading">{obj.title}</h1>
                  <p className="prequire">
                    <AiOutlineFileAdd className="cardconi" />
                    {obj.prescription_required
                      ? "Prescription Required"
                      : "Prescription Not Required"}
                  </p>

                  <div className="pricecard">
                    <p>MRP ₹{obj.price}</p>
                  </div>
                  <div className="qtyadjuster">
                    <button
                      onClick={() => setCount(Count - 1)}
                      disabled={Count == 1 ? true : false}
                    >
                      -
                    </button>

                    <Button>{Count}</Button>
                    <button onClick={() => setCount(Count + 1)}>+</button>
                  </div>
                </div>
              </div>
            </ModalBody>

            <ModalFooter
             
            >
              <Button colorScheme="green" mr={3} onClick={Handleadd}>
                Add To Cart
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
};

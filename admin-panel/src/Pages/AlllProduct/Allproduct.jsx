import React, { useEffect, useState } from "react";
import "./Allproduct.css";
import {Navbar} from "../../Components/Navbar/Navbar"
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
import axios from "axios";
import {Pagination} from "../../Components/Pagination/Pagination"
import {getProduct} from "../../redux/rpoductreducer/action"
import { useDispatch,useSelector } from "react-redux"; 
import { useLocation, useSearchParams } from "react-router-dom";

export const Allproduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const data=useSelector((store) => store.Productreducer.products);
  const [category,setcategory]=useState("covidessentials")

  useEffect(() => {
    if (location || data.length === 0) {
      const getProductParams = {
        parmas: {
          page: searchParams.get("page"),
          sort: searchParams.get("sort"),
          price: searchParams.get("price"),
        },
        category: category,
      };
      dispatch(getProduct(getProductParams));
    }
  }, [dispatch, location.search, data.length, searchParams,category]);

  return (
    <>
 <Navbar/>
    <div className="catecontene">
       <Button onClick={()=>setcategory("covidessentials")}>Covid Essentials</Button>
       <Button onClick={()=>setcategory("personalcare")}>Helthcares</Button>
       <Button onClick={()=>setcategory("mother_and_baby_care")}>Baby& Mother care</Button>
       <Button onClick={()=>setcategory("sexual_wellness")}>Sexual Wellness</Button>
       <Button onClick={()=>setcategory("diabetic_care")}>Dibetics</Button>
       <Button onClick={()=>setcategory("skincare")}>Skincare</Button>
       <Button onClick={()=>setcategory("homecare")}>Home care</Button>
       <Button onClick={()=>setcategory("ayurveduc_care")}>Ayurvedic</Button>
       <Button onClick={()=>setcategory("healty_food_and_drinks")}>Healty Food and Drinks</Button>
       
    </div>
      <div className="tbconter">
        <Table variant="striped" colorScheme="teal" overflow="scrol">
          <Thead>
            <Tr>
              <Th>No</Th>

              <Th>Product Name</Th>

              <Th>Price</Th>
              <Th>Veiw</Th>
              <Th>Edit</Th>
              <Th>Delet</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((el, index) => {
              return (
                <Tr key={el.id}>
                  <Td>{index + 1}</Td>

                  <Td>{el.title}</Td>

                  <Td>{el.price}</Td>
                  <Td>
                    <Button>View</Button>
                  </Td>
                  <Td>
                    <Button bg="green" color="white">
                      Edit
                    </Button>
                  </Td>
                  <Td>
                    <Button bg="red" color="white">
                      Delet
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Pagination/>
      </div>
      
    </>
  );
};

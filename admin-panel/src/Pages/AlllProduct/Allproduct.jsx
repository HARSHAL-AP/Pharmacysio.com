import React, { useEffect, useState } from "react";
import "./Allproduct.css";
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

export const Allproduct = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://average-lime-wildebeest.cyclic.app/product/data")
      .then((r) => setdata(r.data))
      .catch((e) => console.log(e));
  }, [data]);
  return (
    <>

    <div className="catecontene">
       <Button>Covid Essentials</Button>
       <Button>Helthcares</Button>
       <Button>Baby& Mother care</Button>
       <Button>Sexual Wellness</Button>
       <Button>Dibetics</Button>
       <Button>Skincare</Button>
       <Button>Home care</Button>
       <Button>Ayurvedic</Button>
       <Button>Healty Food and Drinks</Button>
       
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
      </div>
    </>
  );
};

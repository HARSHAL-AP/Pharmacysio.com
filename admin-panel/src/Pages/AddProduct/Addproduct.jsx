import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./addproduct.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button
} from "@chakra-ui/react";

export const Addproduct = () => {
  return (
    <>
      <Navbar />
      <div className="pageinfo">
        <h1> Add New Product</h1>
      </div>

      <div className="addpbody">
        <div className="formcontener">
          <FormLabel mt={5}>Product Title</FormLabel>
          <Input type="text" />

          <FormLabel mt={5}>Product Image</FormLabel>
          <Input type="url" />

          <FormLabel mt={5}>Product Image File</FormLabel>
          <input type="file" />

          <FormLabel mt={5}>Product price</FormLabel>
          <Input type="number" />

          <FormLabel mt={5}>Product Discount</FormLabel>
          <Input type="number" />

          <FormLabel mt={5}>Product SalePrice </FormLabel>
          <Input type="number" />

          <FormLabel mt={5}>Category</FormLabel>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <FormLabel mt={5}>Sub-Category</FormLabel>
          <Input type="text" />
          <Button bg="Green" color="white" mt={5}>Submit</Button>
        </div>
      </div>
    </>
  );
};

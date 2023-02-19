import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Fotter } from "../../Components/Fotter/Fotter";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";
import "./Upload.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import { FcDebt, FcUnlock, FcTodoList } from "react-icons/fc";

export const Upload = () => {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_APILINK}/prescription/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("File uploaded:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }
  return (
    <>
      <Navbar />
      <h1 className="ppageh">Upload Prescription</h1>
      <div className="upbox">
        <h2 className="">
          {" "}
          We will create your cart based on your prescription for quick and
          error free delivery.
        </h2>
        <h2>Please upload images of valid prescription from your doctor.</h2>
        <Popover>
          <PopoverTrigger>
            <a className="valp">Valid Prescription?</a>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <PopoverArrow />
            <PopoverCloseButton />
            <img
              src="https://www.1mg.com/images/online_consultation/validate_rx.svg"
              alt=""
            />
          </PopoverContent>
        </Popover>
        <label className="custom-file-upload">
          <input
            type="file"
            accept=".png,.PNG,.jpg,.JPG,.jpeg,.JPEG,.PDF,.pdf"
            className="uplodput"
            onChange={handleFileChange}
          />
          <AiOutlineCloudUpload  className="upcon"/>
        </label>
      </div>
      <div className="adcontener">
        <div>
          
          <FcTodoList className="addicon" />
          <h1>Reliable</h1>
          <p>
            All products displayed on Pharmacysio are procured from verified and
            licensed pharmacies. All labs listed on the platform are accredited
          </p>
        </div>

        <div>
          <FcUnlock className="addicon" />

          <h1>Secure</h1>
          <p>
            Pharmacysio uses Secure Sockets Layer (SSL) 128-bit encryption and
            is Payment Card Industry Data Security Standard (PCI DSS) compliant
          </p>
        </div>

        <div>
          <FcDebt className="addicon" />

          <h1>Affordable</h1>
          <p>
            Find affordable medicine substitutes, save up to 50% on health
            products, up to 80% off on lab tests and free doctor consultations.
          </p>
        </div>
      </div>
      <Fotter />
    </>
  );
};

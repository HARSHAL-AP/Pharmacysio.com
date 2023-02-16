import React, { useState } from "react";
import "./Preiscription.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import axios from "axios";
export const Preiscription = () => {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${process.env.REACT_APP_APILINK}/prescription/upload`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading file", error);
      });
  }
  return (
    <>
      <h1 className="headingpret">
        Please upload images of your prescription.
      </h1>
      <div className="priscriptbody">
        <div>
          <label className="custom-file-upload">
            <input
              type="file"
              accept=".png,.PNG,.jpg,.JPG,.jpeg,.JPEG,.PDF,.pdf"
              className="uplodput"
              onChange={handleFileChange}
            />
            <AiOutlineCloudUpload />
          </label>
          <button className="addbtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className="uldata">
          <h1>step-1 Upload Your Presctiption</h1>
          <h1>
            step-2 Verifiy Your Presctiption By our Pharmacist and Get Your
            Order Ready
          </h1>
          <h1>step-3 Get Your Order Deliver To your Doarstep.</h1>
        </div>
      </div>
      <p className="labeltoupload">
        *A licensed pharmacy would be delivering your order basis availability
        of product & fastest delivery.
      </p>
    </>
  );
};

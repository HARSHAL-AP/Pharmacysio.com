import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Login } from "../Pages/Login/Login";
import { Admininfo } from "../Pages/Admininfo/Admininfo";
import { Allproduct } from "../Pages/AlllProduct/Allproduct";
import { Order } from "../Pages/Orders/Order";
import { Addproduct } from "../Pages/AddProduct/Addproduct";


export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/allproduct" element={<Allproduct />} />

        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/admininfo" element={<Admininfo />} />
      </Routes>
    </>
  );
};

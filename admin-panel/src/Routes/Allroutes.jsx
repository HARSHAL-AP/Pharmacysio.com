import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Login } from "../Pages/Login/Login";
import { Admininfo } from "../Pages/Admininfo/Admininfo";
import { Allproduct } from "../Pages/AlllProduct/Allproduct";
import { Order } from "../Pages/Orders/Order";
import { Addproduct } from "../Pages/AddProduct/Addproduct";
import {PrivetRoute} from "../Components/Privetroute"
import { Labtests } from "../Pages/AlllProduct/Labtest";
import {Medicine} from "../Pages/AlllProduct/Medicine"
import {User} from "../Pages/Users/User"

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivetRoute><Dashboard /></PrivetRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<PrivetRoute><Order /></PrivetRoute>} />
        <Route path="/users" element={<PrivetRoute><User /></PrivetRoute>} />
        <Route path="/allproduct" element={<PrivetRoute><Allproduct /></PrivetRoute>} />
        <Route path="/labtest" element={<PrivetRoute><Labtests /></PrivetRoute>} />
        <Route path="/medicine" element={<PrivetRoute><Medicine /></PrivetRoute>} />
        <Route path="/addproduct" element={<PrivetRoute><Addproduct /></PrivetRoute>} />
        <Route path="/admininfo" element={<PrivetRoute><Admininfo /></PrivetRoute>} />
      </Routes>
    </>
  );
};

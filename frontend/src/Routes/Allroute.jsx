import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from "../Pages/Homepage/Home"
import {Login} from "../Pages/Login/Login"
import {Product} from "../Pages/Productpages/Product"
import {SIgnup} from "../Pages/Signup/SIgnup"
import {Wishlist} from "../Pages/wishlist/Wishlist"
import {Cart} from "../Pages/cart/Cart"
import { Labtest } from '../Pages/Productpages/LabTest/Labtest'
import { Singletest } from '../Pages/Productpages/LabTest/Singletest'

export const Allroute = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/signup" element={<SIgnup/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/labtests" element={<Labtest/>}/>
    <Route path="/labtests/:id" element={<Singletest/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>

    </Routes>
    </>
    
  )
}

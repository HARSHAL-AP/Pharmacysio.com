import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from "../Pages/Homepage/Home"
import {Login} from "../Pages/Login/Login"
import {Product} from "../Pages/Productpages/Product"
import {SIgnup} from "../Pages/Signup/SIgnup"
import {Wishlist} from "../Pages/wishlist/Wishlist"
import {Cart} from "../Pages/cart/Cart"
export const Allroute = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/signup" element={<SIgnup/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>

    </Routes>
    </>
    
  )
}

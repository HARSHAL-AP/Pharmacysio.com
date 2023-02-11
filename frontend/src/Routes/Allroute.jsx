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
import { Covidessential } from '../Pages/Productpages/Allcategorys/Covidessential'
import { Skincare } from '../Pages/Productpages/Allcategorys/Skincare'
import { Dibetics } from '../Pages/Productpages/Allcategorys/Dibetics'
import { Heathyfood } from '../Pages/Productpages/Allcategorys/Heathyfood'
import {Singleproduct} from "../Pages/Productpages/Singleproduct/Singleproduct"
import Payment from "../Pages/Paymentpage/Payment"
import { Sexualwellness } from '../Pages/Productpages/Allcategorys/Sexualwellness'
import { Ayurvedic } from '../Pages/Productpages/Allcategorys/Ayurvedic'
import { Motherandbaby } from '../Pages/Productpages/Allcategorys/Mother&baby'
import { Homecare } from '../Pages/Productpages/Allcategorys/Homecare'
import { Personalcare } from '../Pages/Productpages/Allcategorys/Pesonalcare'
import { Medicine } from '../Pages/Medicines/Medicine'

export const Allroute = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/signup" element={<SIgnup/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/covidessential" element={<Covidessential/>}/>
    <Route path="/skincare" element={<Skincare/>}/>
    <Route path="/dibetics" element={<Dibetics />}/>
    <Route path="/heathyfood" element={<Heathyfood />}/>
    <Route path="/Singleproduct/:id" element={<Singleproduct />}/>
    <Route path="/labtests" element={<Labtest/>}/>
    <Route path="/labtests/:id" element={<Singletest/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/sexualwellness" element={<Sexualwellness/>}/>
    <Route path="/ayurvedic" element={<Ayurvedic/>}/>
    <Route path="/motherandbaby" element={<Motherandbaby/>}/>
    <Route path="/homecare" element={<Homecare/>}/>
    <Route path="/personalcare" element={<Personalcare/>}/>
    <Route path="/medicine" element={<Medicine/>}/>
    </Routes>
    </>
    
  )
}

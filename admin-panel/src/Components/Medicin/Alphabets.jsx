import { Button } from '@chakra-ui/react'
import React,{useEffect, useState} from "react";
import "./Alphabet.css"
import { useLocation,useSearchParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux/es/exports";
import {getMedicindata} from "../../redux/rpoductreducer/action"

export const Alphabets = () => {
  const dispatch=useDispatch()
  const location=useLocation()
  const [searchParams]=useSearchParams()
  const[alphabet,setalphabet]=useState("A")
  const data=useSelector((store)=>store.Productreducer.medicine)
useEffect(()=>{
if(location||data.length===0){
  const getParams={
    page:searchParams.get("page")
    
  }
  dispatch(getMedicindata(getParams,alphabet))
}





},[alphabet,location.search,data.length,searchParams])


  let arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  
  
  
  
  
  return (
    <div className='alphabody'>{
      arr.map((e,index)=>{
        return <Button key={index} onClick={()=>setalphabet(e)}>{e}</Button>
      })
      
      }</div>
  )
}